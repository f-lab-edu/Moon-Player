import { useState } from 'react'

// Input에 들어오는값이 올바른지 검증해주는 커스텀훅 
const useValidator = () => {
  const [errors, setErrors] = useState([])

  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  // validate 함수역할 
  //  return : 검증 성공시 [] (빈배열),
  // 검증실패시 [‘Email is required’, ‘Email must be formatted with name@host.domain’] 
  //  setErrors 상태도 결정  

  const validate = (obj) => {
    const [isEmail, isEmailRequired] = obj.fns

    if (!isEmailRequired(obj)) {
      console.log('이메일을 입력하지 않았습니다.')
      setErrors(['이메일을 입력하지 않았습니다.'])
      return
    }

    else if (!isEmail(obj)) {
      console.log('이메일 형식이 아닙니다.')
      setErrors(['이메일 형식이 아닙니다.'])
      return
    }
    console.log('이메일 형식입니다')

    return []
  }

  return { errors, validate }
}
export default useValidator