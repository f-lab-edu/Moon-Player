export const fetchById = async (url, id) => {
  return await (await fetch(`${url}${id}`)).json();
};
export const fetchData = async (url) => {
  return await (await fetch(url)).json();
};
export const sendToken = async (accessToken) => {
  const url = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`;
  try {
    const response = await (
      await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${accessToken}`,
        },
      })
    ).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
