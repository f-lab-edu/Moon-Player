const REDIRECT_URI = `http://localhost:3000`;

export const KAKAO_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
// eslint-disable-next-line max-len
export const KAKAO_oAuth_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_REQUEST_BODY = `grant_type=authorization_code&client_id=${KAKAO_ID}&redirect_url=${REDIRECT_URI}`;
export const KAKAO_REQUEST_URL = `https://kauth.kakao.com/oauth/token`;
