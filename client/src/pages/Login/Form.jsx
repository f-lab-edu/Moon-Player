import styled from 'styled-components'
import useValidator from 'hooks/useValidator';
import useAuthenticator from 'hooks/useAuthenticator';
import { checkEmail, checkRequired, checkPassword } from 'utils/Validator';
import { useState } from 'react';
import { Text } from 'components/Common/Text';

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin: 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #6633cc;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color:white;
  &:hover{
    cursor: pointer;
    background: pink;
  }
  &:active{
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
  }

  &:disabled{
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    cursor: default;
    opacity: 0.5;
    background: #6633cc;
  }

  font-weight: bold;

`;

const Input = styled.input(({ error }) => `
  width: 500px;
  height: 40px;
  border: 0;
  padding: 10px 0px;
  background: transparent;
  outline-width: 0;
  margin-top: 23px;
  font-size: 18px;
  border-bottom: 1px solid ${error ? 'rgba(255,0,0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${error ? 'red' : 'black'};
`)

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

const ErrorText = styled(Text)`
visibility:${props => props.error ? 'visible' : 'hidden'};
margin-top:3px;
`

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