// utils 폴더 안에있음

// 1. 올바른 이메일 형식인지 체크
export const checkEmail = (obj) => {
  // RFC 5322 형식 이메일 확인 정규식
  let regex = new RegExp('([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])');
  return regex.test(obj.email) ? true : false;
}

// 2. 주어진 string이 빈값인지 확인 
export const checkRequired = (obj) => {
  if (obj.email !== '' && obj.password !== '') {
    return true
  }
  return false
}