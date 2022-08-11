import { jsonResponse } from "../utils/jsonResponse";

type AirtableCredentials = {
  AIRTABLE_API_KEY: string;
  AIRTABLE_BASE_ID: string;
  AIRTABLE_TABLE_NAME: string;
};

export const onRequestPost: PagesFunction<{ MESSAGES: KVNamespace }> = async ({
  request,
  env,
}) => {
  const { AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_API_KEY } = env;
  const airtable = { AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_API_KEY };
  try {
    const { name, email, message } = await parseFormData(request);
    const kVPromise = env.MESSAGES.put(email, `${name} - ${message}`);
    const airTablePromise = createAirtableRecord(
      { name, email, message },
      airtable
    );
    await Promise.all([kVPromise, airTablePromise]);
    return jsonResponse("Successfully submitted form", {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.error(error);
    return jsonResponse(error, { status: 500 });
  }
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const parseFormData = async (request: Request): Promise<FormData> => {
  const formData = (await request.formData()) as unknown as Iterable<
    [FormData, string | File]
  >;
  const data: FormData = Object.fromEntries(formData);
  return data;
};

const createAirtableRecord = (
  values: FormData,
  airtable: AirtableCredentials
) => {
  const { AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, AIRTABLE_API_KEY } = airtable;
  return fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}`,
    {
      method: "POST",
      body: JSON.stringify({
        fields: values,
      }),
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-type": `application/json`,
      },
    }
  );
};
