import Toucan from "toucan-js";
import { jsonResponse } from "./utils";

const sentry = async (context) => {
  const sentry = new Toucan({
    dsn: context.env.DSN,
    context: context,
  });
  // handle errors
  try {
    return await context.next();
  } catch (err) {
    sentry.captureException(err);
    return jsonResponse(`Error: ${err.message}`, {
      status: err.status || 500,
      statusText: err.statusText || "Internal Server Error",
    });
  }
};

const getTimeDelta: PagesFunction = async ({ data, next }) => {
  data.timestamp = Date.now();
  const res = await next();
  // response in milliseconds
  const delta = Date.now() - (data.timestamp as number);
  res.headers.set("x-response-timing", delta.toString());
  return res;
};

export const onRequest = [sentry, getTimeDelta];
