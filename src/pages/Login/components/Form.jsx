import styled from 'styled-components'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/items/Input';

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
  const userEmail = useRef()
  const userPassword = useRef()

  const onInputChangeHandler = () => {
    console.log(userEmail.current.value)
    console.log(userPassword.current.value)
  }

  return (
    <Box>
      <Input placeholder="Email" type="email" onChange={onInputChangeHandler} ref={userEmail} />
      <Input placeholder="Password" type="password" onChange={onInputChangeHandler} ref={userPassword} />
      <Link>아이디 / 비밀번호 찾기</Link>
    </Box>
  )
}

export default Form