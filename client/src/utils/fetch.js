export const fetchById = async (url, id) => {
  return await (await fetch(`${url}${id}`)).json();
};
export const fetchData = async (url) => {
  return await (await fetch(url)).json();
};
