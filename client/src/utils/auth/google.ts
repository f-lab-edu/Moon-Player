export const Google_Client_ID = process.env.REACT_APP_Google_CLIENT_ID;
const REDIRECT_URI = `http://localhost:3000`;
export const Google_oAuth_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_Client_ID}&
response_type=code&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;
export const Google_SECRET_ID = process.env.REACT_APP_Google_SECRET_ID;
// eslint-disable-next-line max-len
export const Google_REQUEST_BODY = `grant_type=authorization_code&client_id=${Google_Client_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${Google_SECRET_ID}`;
export const Google_REQUEST_URI = `https://www.googleapis.com/oauth2/v4/token`;
