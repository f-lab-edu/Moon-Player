// utils 폴더 안에있음

//이메일 확인 정규식
const emailPattern = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/

// 숫자와영문조합으로 8개이상 15개이하
// TODO - detail: 대문자 최소 1개 & 특문 최소 1개
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

// 빈값반환 하면 검증 통과
export const checkEmail = (str) => {
  return emailPattern.test(str) ? '' : '이메일 양식에 맞춰 입력해주세요'
}

export const checkRequired = (str) => {
  return str !== '' ? '' : '필수 항목입니다. '
}
export const checkPassword = (str) => {
  return passwordPattern.test(str) ? '' : '숫자 영문조합 (8-15개이하)'
}

