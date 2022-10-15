import styled from 'styled-components'
import Button from 'components/items/Button';
import { Link } from 'react-router-dom';
import Input from 'components/items/Input';
import useValidator from 'hooks/useValidator';
import useAuthenticator from '../../../hooks/useAuthenticator';
import { checkEmail, checkRequired, checkPassword } from '../../../utils/Validator';
import { useState } from 'react';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
  @media screen and (max-width:700px){
    width: 70vw;
    overflow: hidden;
  }
`;
const ButtonBox = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width:700px){
    width: 70vw;
    overflow: hidden;
  }
`

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { errors, validate } = useValidator()
  const { signIn } = useAuthenticator()

  // 버튼 클릭시 동작  비밀번호 예외?
  const onButtonClickHandler = () => {
    const result = validate({
      email: { value: email, fns: [checkRequired, checkEmail]},
      password: { value: password, fns: [checkRequired, checkPassword]},
    })

    if (Object.keys(result).length !== 0) return
    
    alert('로그인하였습니다.')
    signIn()
  }

  return (
    <>
      <InputBox>
        <Input placeholder="Email" type="email" onChange={({ target: { value }}) => setEmail(value)} value={email} error={errors.email ? errors.email.join('') : ''} />
        <Input placeholder="Password" type="password" onChange={({ target: { value }}) => setPassword(value)} value={password} errors={errors.password ? errors.password.join('') : ''} />
        <Link to="#">아이디 / 비밀번호 찾기</Link>
      </InputBox>
      <ButtonBox>
        <Button onClick={onButtonClickHandler}>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </>
  )
}

export default Form