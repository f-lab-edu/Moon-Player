// utils 폴더 안에있음

//이메일 확인 정규식
const pattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
// 1. 올바른 이메일 형식인지 체크
export const checkEmail = (obj) => {
  const { email } = obj
  return pattern.test(email) ? true : false;
}

// 2. 주어진 Email string이 빈값인지 확인 
export const checkEmailRequired = (obj) => {
  const { email } = obj
  return email !== '' ? true : false
}