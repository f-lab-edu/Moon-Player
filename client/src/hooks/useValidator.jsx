import { useState } from 'react'

// Input에 들어오는값이 올바른지 검증해주는 커스텀훅 
const useValidator = () => {
  const [errors, setErrors] = useState({})
  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  // validate 함수역할 
  //  return : 검증 성공시 [] (빈배열),
  // 검증실패시  ‘Email is required’ or ‘Email must be formatted with name@host.domain’
  //  setErrors 상태도 결정  

  const validate = (obj) => {
    const newErrors = {}
    Object.entries(obj).forEach(([key, { value, fns }]) => {
      fns.forEach((fn) => {
        const result = fn(value)
        if (result !== '') {
          if (newErrors[key]) return newErrors[key].push(result)
          newErrors[key] = [result]
        }
      })
    })
    setErrors(newErrors)
    return newErrors
  }

  return { errors, validate }

}
export default useValidator