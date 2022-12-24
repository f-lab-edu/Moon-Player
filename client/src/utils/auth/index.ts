/* eslint-disable indent */
import {
  GOOGLE_OAUTH_URL,
  GOOGLE_REQUEST_BODY,
  GOOGLE_REQUEST_URI,
  KAKAO_REQUEST_URL,
  KAKAO_REQUEST_BODY,
  KAKAO_OAUTH_URL,
  NAVER_REQUEST_URL,
  NAVER_REQUEST_BODY,
  NAVER_OAUTH_URL,
} from '../../constants/index';
export const getCode = (): string => {
  const url = new URL(window.location.href).searchParams;
  const code = url.get('code');
  if (!code) return '';
  return code;
};

export const assignAuthURL = (name: string) => {
  const oAuthURL = name === 'Google' ? GOOGLE_OAUTH_URL : name === 'Kakao' ? KAKAO_OAUTH_URL : NAVER_OAUTH_URL;
  window.location.assign(oAuthURL);
};
export const getRequestForOauth = (code: string, name: string) => {
  const REQUEST_URI = name === 'Google' ? GOOGLE_REQUEST_URI : name === 'Kakao' ? KAKAO_REQUEST_URL : NAVER_REQUEST_URL;
  const REQUEST_BODY =
    name === 'Google'
      ? `${GOOGLE_REQUEST_BODY}&code=${code}`
      : name === 'Kakao'
      ? `${KAKAO_REQUEST_BODY}&code=${code}`
      : `${NAVER_REQUEST_BODY}&code${code}`;

  return { REQUEST_URI, REQUEST_BODY };
};
