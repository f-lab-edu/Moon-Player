import { useState } from 'react'

const useValidator = () => {
  const [error, setErrors] = useState([])

  // validate 함수역할 
  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  //  return : 검증 성공시 [] (빈배열),검증실패시 [‘Email is required’, ‘Email must be formatted with name@host.domain’] 
  //  setErrors 상태도 결정  
  const validate = (obj) => {

  }
  return { error, validate }
}
export default useValidator