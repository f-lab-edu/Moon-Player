import { useState } from 'react'

// Input에 들어오는값이 올바른지 검증해주는 커스텀훅 
const useValidator = () => {
  const [errors, setErrors] = useState({ message: ['값을 입력 하세요 !'] })

  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  // validate 함수역할 
  //  return : 검증 성공시 [] (빈배열),
  // 검증실패시  ‘Email is required’ or ‘Email must be formatted with name@host.domain’
  //  setErrors 상태도 결정  

  const validate = (obj) => {
    const [checkEmail, checkRequired, checkPassowrd] = obj.fns

    if (!checkEmail(obj)) {
      setErrors({ 'message': ['올바른 형식의 이메일이 아닙니다.'], type: 'email' })
      return
    }
    else if (!checkPassowrd(obj)) {
      setErrors({ message: ['비밀번호가 숫자와 영문조합으로 8개이상 15개 이하인지 확인하세요 !'], type: 'password' })
      return
    }
    // 
    else if (!checkRequired(obj)) { //값 입력안한 부분있는지 체크
      setErrors({ 'message': ['값을 입력 하세요 !'] })
      return
    }

    setErrors([])

    return
  }

  return { errors, validate }

}
export default useValidator