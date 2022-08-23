import { jsonResponse, parseFormData } from "../utils";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const onRequestPost: PagesFunction<{
  MESSAGES: KVNamespace;
  SENDGRID_API_KEY: string;
  SENDGRID_TEMPLATE_ID: string;
}> = async (context) => {
  try {
    const API_KEY = context.env.SENDGRID_API_KEY;
    const TEMPLATE_ID = context.env.SENDGRID_TEMPLATE_ID;
    const data = await parseFormData<FormData>(context.request);

    if (!data.name || !data.email || !data.message)
      throw new Error("Missing data");
    const kVPromise = handleKVStorage(data, context.env.MESSAGES);
    const mailPromise = sendEmail(data, API_KEY, TEMPLATE_ID);
    const dbPromise = sendDataToDB(data);
    await Promise.all([kVPromise, mailPromise, dbPromise]);

    return jsonResponse("Successfully submitted form", {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return jsonResponse(error.message, {
      status: 400,
      statusText: "Bad Request",
    });
  }
};

const handleKVStorage = async (data: FormData, storage: KVNamespace) => {
  const { name, email, message } = data;
  const rand = Math.floor(Math.random() * 101).toString();
  return await storage.put(`${email}-${rand}`, `${name} - ${message}`);
};

const sendEmail = async (
  data: FormData,
  apiKey: string,
  template_id: string
) => {
  const { name, email, message } = data;

  const fetchRequestOptions: RequestInit = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: {
        email: "hi@jeremynguyen.dev",
      },
      personalizations: [
        {
          to: [
            {
              email: "hi@jeremynguyen.dev",
            },
          ],
          dynamic_template_data: {
            name: name,
            email: email,
            message: message,
            date: new Date().toLocaleString(),
          },
        },
      ],
      template_id: template_id,
    }),
  };
  return fetch("https://api.sendgrid.com/v3/mail/send", fetchRequestOptions);
};

const sendDataToDB = async (data: FormData) => {
  const { name, email, message } = data;
  const DB_SERVERLESS_URL =
    "https://contact-database-function.jeremynguyen.workers.dev";

  return await fetch(DB_SERVERLESS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
};
