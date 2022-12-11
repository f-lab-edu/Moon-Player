const Google_Client_ID = process.env.REACT_APP_Google_CLIENT_ID;
const REDIRECT_URI = `http://localhost:3000`;
const Google_oAuth_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_Client_ID}&
response_type=code&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;
const Google_SECRET_ID = process.env.REACT_APP_Google_SECRET_ID;

export const getGoogleCode = (): string => {
  const url = new URL(window.location.href).searchParams;
  const code = url.get('code');
  if (!code) return '';
  return code;
};

export const assignGoogleAuthURL = () => {
  window.location.assign(Google_oAuth_URL);
};
export const getGoogleToken = async (code: string) => {
  const requesturl = `https://www.googleapis.com/oauth2/v4/token`;
  // eslint-disable-next-line max-len
  const requestbody = `grant_type=authorization_code&client_id=${Google_Client_ID}&redirect_uri=${REDIRECT_URI}&code=${code}&client_secret=${Google_SECRET_ID}`;

  try {
    const response = await (
      await fetch(requesturl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: requestbody,
      })
    ).json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
