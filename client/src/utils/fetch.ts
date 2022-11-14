export const fetchById = async (url: string, id: string): Promise<object[]> => {
  return await (await fetch(`${url}${id}`)).json();
};
export const fetchData = async (url: string): Promise<object[]> => {
  return await (await fetch(url)).json();
};
