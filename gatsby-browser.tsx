// Imports polyfill for native IntersectionObserver API in unsupporting browsers
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
