// utils 폴더 안에있음

//이메일 확인 정규식
const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/

// 숫자와영문조합으로 8개이상 15개이하
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

// 1. 올바른 이메일 형식인지 체크
export const checkEmail = (obj) => {
  const { email } = obj
  return emailPattern.test(email)
}

// 2. 주어진 값이 빈값인지  체크  
export const checkRequired = (obj) => {
  const { email, password } = obj
  return email !== '' && password !== '' ? true : false
}
//  3. 올바른 패스워드 형식인지 확인 
export const checkPassowrd = (obj) => {
  const { password } = obj
  return passwordPattern.test(password)
}

