import { Google_oAuth_URL, Google_REQUEST_BODY, Google_REQUEST_URI } from './auth';

export const getCode = (): string => {
  const url = new URL(window.location.href).searchParams;
  const code = url.get('code');
  if (!code) return '';
  return code;
};

export const assignAuthURL = (name: string) => {
  const oAuthURL = name === 'Google' ? Google_oAuth_URL : Google_oAuth_URL;
  window.location.assign(oAuthURL);
};
export const getToken = async (code: string, name: string) => {
  const REQUEST_URI = name === 'Google' ? `${Google_REQUEST_URI}` : `${Google_REQUEST_URI}`;
  const REQUEST_BODY = name === 'Google' ? `${Google_REQUEST_BODY}&code=${code}` : `${Google_REQUEST_BODY}`;

  try {
    const response = await (
      await fetch(REQUEST_URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: REQUEST_BODY,
      })
    ).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
