const Google_ID = process.env.REACT_APP_CLIENT_ID;
const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_ID}&
response_type=token&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;

export const getToken = () => {
  const urlHash = new URL(window.location.href).hash;
  console.log(urlHash);
  if (!urlHash) return;
  const token = urlHash.split('=')[1].split('&')[0];
  return token;
};

export const assignURL = () => {
  window.location.assign(oAuthURL);
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
