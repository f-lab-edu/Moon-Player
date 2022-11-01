export const fetchById = async (url, id) => {
  return await (await fetch(`${url}${id}`)).json();
};
export const fetchData = async (url) => {
  return await (await fetch(url)).json();
};
export const sendtoToken = async (url, accessToken) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${accessToken}`,
    },
  });
  return response;
};
