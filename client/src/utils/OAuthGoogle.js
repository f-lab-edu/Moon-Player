import { sendtoToken } from 'utils/fetchAPI';

const Google_ID = process.env.REACT_APP_ClientID;
const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Google_ID}&
response_type=token&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.email`;

export const requestGoogleLogin = async () => {
  try {
    const url = new URL(window.location.href);
    const urlHash = url.hash;
    const accessToken = urlHash.split('=')[1].split('&')[0];
    return sendtoToken(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchGoogleToken = () => {
  window.location.assign(oAuthURL);
};
