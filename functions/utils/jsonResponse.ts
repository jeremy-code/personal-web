export const jsonResponse = (
  value: string,
  init: ResponseInit = {}
): Response =>
  new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init,
  });
