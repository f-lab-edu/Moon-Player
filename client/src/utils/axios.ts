import axios, { AxiosResponse } from 'axios';
interface token {
  access_token: string;
}
export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async (REQUEST_URI: string, REQUEST_BODY: string) => {
  try {
    console.log(REQUEST_URI);
    console.log(REQUEST_BODY);
    const response = await axios({
      method: 'post',
      url: REQUEST_URI,
      data: REQUEST_BODY,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
