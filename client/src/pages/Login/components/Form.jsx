import styled from 'styled-components'
import Button from 'components/Common/Button';
import Input from 'components/Common/Input';
import useValidator from 'hooks/useValidator';
import useAuthenticator from 'hooks/useAuthenticator';
import { checkEmail, checkRequired, checkPassword } from 'utils/Validator';
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

const ErrorText = styled.span(({ error }) => `
  visibility:${error ? 'visible' : 'hidden'};
  margin-top:3px;
  color: ${error ? 'red' : 'black'};
  
`)

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { errors, validate } = useValidator()
  const { signIn } = useAuthenticator()

  const handleClickLogOut = () => {
    //  현재 inputvalue 를 validate로 보냄
    // return 에러메시지에 대한 result

    const result = validate({
      email: { value: email, funcs: [checkRequired, checkEmail] },
      password: { value: password, funcs: [checkRequired, checkPassword] },
    })
    // 에러메시지가 존재하면 로그인 실패
    if (Object.keys(result).length !== 0) return
    alert('로그인하였습니다.')
    signIn()
  }

  return (
    <>
      <InputBox>
        <Input placeholder="Email" type="email" onChange={({ target: { value } }) => setEmail(value)} error={errors.email ? errors.email.join('') : ''} />
        <ErrorText error={errors.email ? errors.email.join('') : ''}>{errors.email ? errors.email.join('') : ''}</ErrorText>
        <Input placeholder="Password" type="password" onChange={({ target: { value } }) => setPassword(value)} error={errors.password ? errors.password.join('') : ''} />
        <ErrorText error={errors.password ? errors.password.join('') : ''}>{errors.password ? errors.password.join('') : ''}</ErrorText>
      </InputBox>
      <ButtonBox>
        <Button onClick={handleClickLogOut}>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </>
  )
}

export default Form