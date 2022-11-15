export const fetchData = async (url: string) => {
  return await (await fetch(url)).json();
};
