const errorHandler: PagesFunction = async ({ next }) => {
  try {
    return await next();
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

export const onRequest = [errorHandler];
