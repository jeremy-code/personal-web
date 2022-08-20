import { jsonResponse, parseFormData } from "../utils";
import type { Database } from "@cloudflare/d1";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const onRequestPost: PagesFunction<{
  MESSAGES: KVNamespace;
  DB_MESSAGES: Database;
}> = async (context) => {
  const API_KEY = context.env.SENDGRID_API_KEY;
  const TEMPLATE_ID = context.env.SENDGRID_TEMPLATE_ID;
  const data = await parseFormData<FormData>(context.request);
  if (!data.name || !data.email || !data.message)
    throw new Error("Missing data");
  const kVPromise = handleKVStorage(data, context.env.MESSAGES);
  const mailPromise = sendEmail(data, API_KEY, TEMPLATE_ID);

  const { name, email, message } = data;
  const stmt = await context.env.DB_MESSAGES.prepare(
    "INSERT INTO messages (name, email, message, date) VALUES (?, ?, ?, ?)"
  )
    .bind(name, email, message, new Date().toLocaleString())
    .run();
  console.log(stmt);

  const res = await Promise.all([kVPromise, mailPromise]);
  if (!res[1].ok) throw new Error("Sendgrid error");
  return jsonResponse("Successfully submitted form", {
    status: 200,
    statusText: "OK",
  });
};

const handleKVStorage = async (data: FormData, storage: KVNamespace) => {
  const { name, email, message } = data;
  const rand = Math.floor(Math.random() * 101).toString();
  return storage.put(`${email}-${rand}`, `${name} - ${message}`);
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
