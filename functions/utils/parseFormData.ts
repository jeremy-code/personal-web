export const parseFormData = async <T>(request: Request): Promise<T> => {
  const formData = (await request.formData()) as unknown as Iterable<
    [T, string | File]
  >;
  const data: T = Object.fromEntries(formData);
  return data;
};
