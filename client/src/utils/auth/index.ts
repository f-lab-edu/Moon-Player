/* eslint-disable indent */
import {
  Google_oAuth_URL,
  Google_REQUEST_BODY,
  Google_REQUEST_URI,
  KAKAO_REQUEST_URL,
  KAKAO_REQUEST_BODY,
  KAKAO_oAuth_URL,
  Naver_REQUEST_URL,
  Naver_REQUEST_BODY,
  Naver_oAuth_URL,
} from '../../constants/index';
export const getCode = (): string => {
  const url = new URL(window.location.href).searchParams;
  const code = url.get('code');
  if (!code) return '';
  return code;
};

export const assignAuthURL = (name: string) => {
  const oAuthURL = name === 'Google' ? Google_oAuth_URL : name === 'Kakao' ? KAKAO_oAuth_URL : Naver_oAuth_URL;
  window.location.assign(oAuthURL);
};
export const getRequestForOauth = (code: string, name: string) => {
  const REQUEST_URI = name === 'Google' ? Google_REQUEST_URI : name === 'Kakao' ? KAKAO_REQUEST_URL : Naver_REQUEST_URL;
  const REQUEST_BODY =
    name === 'Google'
      ? `${Google_REQUEST_BODY}&code=${code}`
      : name === 'Kakao'
      ? `${KAKAO_REQUEST_BODY}&code=${code}`
      : `${Naver_REQUEST_BODY}&code${code}`;

  return { REQUEST_URI, REQUEST_BODY };
};
