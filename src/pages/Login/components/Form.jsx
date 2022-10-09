import styled from 'styled-components'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/items/Input';
import useValidator from 'hooks/useValidator';
import { checkEmail, checkEmailRequired } from '../../../utils/Validator';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const Form = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { errors, validate } = useValidator()

  //  Input 값 변경 시 동작 
  const onInputChangeHandler = () => {
    const emailValue = emailRef.current.value
    validate({ email: emailValue, fns: [checkEmail, checkEmailRequired] })
  }

  return (
    <Box>
      <Input placeholder="Email" type="email" onChange={onInputChangeHandler} ref={emailRef} />
      <Input placeholder="Password" type="password" onChange={onInputChangeHandler} ref={passwordRef} />
      <Link>아이디 / 비밀번호 찾기</Link>
    </Box>
  )
}

export default Form