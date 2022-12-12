// import { KAKAO_oAuth_URL, KAKAO_ID, REDIRECT_URI } from './auth';

// export const assignKaKaoAuthURL = () => {
//   window.location.assign(KAKAO_oAuth_URL);
// };

// export const getKakaoCode = (): string => {
//   const url = new URL(window.location.href).searchParams;
//   const token = url.get('code');
//   if (!token) return '';
//   return token;
// };

// export const getKaKaoToken = async (accessToken: string) => {
//   const requesturl = `https://kauth.kakao.com/oauth/token`;
//   try {
//     const response = await (
//       await fetch(requesturl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: `grant_type=authorization_code&client_id=${KAKAO_ID}&redirect_url=${REDIRECT_URI}&code=${accessToken}`,
//       })
//     ).json();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
