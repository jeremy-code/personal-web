addEventListener("fetch", (event) => {
  const request = event.request;
  const { pathname } = new URL(request.url);

  if (pathname === "/submit") {
    if (request.method === "OPTIONS") {
      event.respondWith(handleOptions());
    } else if (request.method === "POST") {
      event.respondWith(handleRequest(event));
    } else {
      event.respondWith(
        new Response(null, { status: 405, statusText: "Method Not Allowed" })
      );
    }
  }
});

const readRequestBody = async (request: Request) => {
  const formData = await request.formData();
  const body = {} as [key: string, value: string | File][];
  for (const entry of formData.entries()) {
    body[entry[0]] = entry[1];
  }
  return JSON.stringify(body);
};

const handleOptions = () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
};

type FieldValues = {
  Name: string;
  Email: string;
  Message: string;
};

const handleRequest = async (event: FetchEvent) => {
  const body = JSON.parse(await readRequestBody(event.request));
  const { name, email, message } = body;
  const values = {
    Name: name as string,
    Email: email as string,
    Message: message as string,
  };
  return await createAirtableRecord(values);
};

const createAirtableRecord = (values: FieldValues) => {
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
