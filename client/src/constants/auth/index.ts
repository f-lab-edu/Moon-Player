const REDIRECT_URI = `http://localhost:3000`;
const {
  REACT_APP_KAKAO_CLIENT_ID: KAKAO_ID,
  REACT_APP_GOOGLE_CLIENT_ID: GOOGLE_Client_ID,
  REACT_APP_GOOGLE_SECRET_ID: GOOGLE_SECRET_ID,
  REACT_APP_NAVER_CLIENT_ID: NAVER_ID,
  REACT_APP_NAVER_SECRET_ID: NAVER_Secret_ID,
} = process.env;
// eslint-disable-next-line max-len
export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_REQUEST_BODY = `grant_type=authorization_code&client_id=${KAKAO_ID}&redirect_url=${REDIRECT_URI}`;
export const KAKAO_REQUEST_URL = `https://kauth.kakao.com/oauth/token`;
export const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_Client_ID}&
response_type=code&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;
// eslint-disable-next-line max-len
export const GOOGLE_REQUEST_BODY = `grant_type=authorization_code&client_id=${GOOGLE_Client_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${GOOGLE_SECRET_ID}`;
export const GOOGLE_REQUEST_URI = `https://www.googleapis.com/oauth2/v4/token`;
// eslint-disable-next-line max-len
export const NAVER_OAUTH_URL = `https://nid.naver.com/oauth2.0/authorize?&response_type=code&client_id=${NAVER_ID}&redirect_uri=${REDIRECT_URI}&state=MoonPlayer`;
export const NAVER_REQUEST_URL = `https://nid.naver.com/oauth2.0/token`;
// eslint-disable-next-line max-len
export const NAVER_REQUEST_BODY = `grant_type=authorization_code&client_id=${NAVER_ID}&client_secret=${NAVER_Secret_ID}`;

// 네이버 로그인 cors 백앤드서버 따로 만들어서 해줘야함.. 하
