import { useState } from 'react';

// Input에 들어오는값이 올바른지 검증해주는 커스텀훅
const useValidator = () => {
  const [errors, setErrors] = useState({});
  // params : obj = { email: { value: emailValue, fns: [checkEmail, checkRequired] }
  // validate 함수역할
  //  return : 검증 성공시 [] (빈배열),
  // 검증실패시  ‘Email is required’ or ‘Email must be formatted with name@host.domain’
  //  setErrors 상태도 결정

  // 전달된 input value
  const validate = (obj) => {
    const newErrors = {};

    Object.entries(obj).forEach(([key, { value, funcs }]) => {
      // 에러 검증함수들 확인
      funcs.forEach((fun) => {
        const result = fun(value);
        // 값이 존재 하면 에러메시지 있음
        if (result !== '') {
          // 키값의 value가 존재하면 에러메시지가있으므로 그냥넣고
          if (newErrors[key]) return newErrors[key].push(result);
          // 키값의 value가 없으므로 초기값
          newErrors[key] = [result];
        }
      });
    });
    setErrors(newErrors);
    return newErrors;
  };

  return { errors, validate };
};
export default useValidator;
