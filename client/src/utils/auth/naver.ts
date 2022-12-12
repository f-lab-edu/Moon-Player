const REDIRECT_URI = `http://localhost:3000`;
export const Naver_ID = process.env.REACT_APP_Naver_CLIENT_ID;
export const Naver_Secret_ID = process.env.REACT_APP_Naver_SECRET_ID;
// eslint-disable-next-line max-len
export const Naver_oAuth_URL = `https://nid.naver.com/oauth2.0/authorize?=${Naver_ID}&response_type=code&client_id=${Naver_ID}&redirect_uri=${REDIRECT_URI}&state=MoonPlayer`;
export const Naver_REQUEST_URL = `https://nid.naver.com/oauth2.0/token`;
// eslint-disable-next-line max-len
export const Naver_REQUEST_BODY = `grant_type=authorization_code&client_id=${Naver_ID}&client_secret=${Naver_Secret_ID}`;
