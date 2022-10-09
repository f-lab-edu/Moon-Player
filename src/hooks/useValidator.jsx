import { useState } from 'react'

// Input에 들어오는값이 올바른지 검증해주는 커스텀훅 
const useValidator = () => {
  const [errors, setErrors] = useState({ error: ['값을 입력 하세요'] })

  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  // validate 함수역할 
  //  return : 검증 성공시 [] (빈배열),
  // 검증실패시  ‘Email is required’ or ‘Email must be formatted with name@host.domain’
  //  setErrors 상태도 결정  

  const validate = (obj) => {
    const [checkEmail, checkRequired] = obj.fns

    if (!checkRequired(obj)) {

      setErrors({
        error: ['값을 입력 하세요 !']
      })
    }

    else if (!checkEmail(obj)) {
      setErrors({
        error: ['올바른 형식의 이메일이 아닙니다.']
      })
    }
    else {
      setErrors([])
    }
    return
  }

  return { errors, validate }

}
export default useValidator