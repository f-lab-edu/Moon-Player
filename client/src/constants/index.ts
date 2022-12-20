const REDIRECT_URI = `http://localhost:3000`;

export const KAKAO_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
// eslint-disable-next-line max-len
export const KAKAO_oAuth_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_REQUEST_BODY = `grant_type=authorization_code&client_id=${KAKAO_ID}&redirect_url=${REDIRECT_URI}`;
export const KAKAO_REQUEST_URL = `https://kauth.kakao.com/oauth/token`;

export const Google_Client_ID = process.env.REACT_APP_Google_CLIENT_ID;
export const Google_oAuth_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_Client_ID}&
response_type=code&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;
export const Google_SECRET_ID = process.env.REACT_APP_Google_SECRET_ID;
// eslint-disable-next-line max-len
export const Google_REQUEST_BODY = `grant_type=authorization_code&client_id=${Google_Client_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${Google_SECRET_ID}`;
export const Google_REQUEST_URI = `https://www.googleapis.com/oauth2/v4/token`;

export const Naver_ID = process.env.REACT_APP_Naver_CLIENT_ID;
export const Naver_Secret_ID = process.env.REACT_APP_Naver_SECRET_ID;
// eslint-disable-next-line max-len
export const Naver_oAuth_URL = `https://nid.naver.com/oauth2.0/authorize?&response_type=code&client_id=${Naver_ID}&redirect_uri=${REDIRECT_URI}&state=MoonPlayer`;
export const Naver_REQUEST_URL = `https://nid.naver.com/oauth2.0/token`;
// eslint-disable-next-line max-len
export const Naver_REQUEST_BODY = `grant_type=authorization_code&client_id=${Naver_ID}&client_secret=${Naver_Secret_ID}`;
