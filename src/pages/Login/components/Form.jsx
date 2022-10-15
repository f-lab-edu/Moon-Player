import styled from 'styled-components'
import Button from 'components/items/Button';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/items/Input';
import useValidator from 'hooks/useValidator';
import useAuthenticator from '../../../hooks/useAuthenticator';
import { checkEmail, checkRequired, checkPassowrd } from '../../../utils/Validator';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const EmailInput = styled(Input)`
border-bottom: 1px solid ${({ errors }) => errors.type === 'email' ? 'rgba(255,0,0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
color: ${({ errors }) => errors.type === 'email' ? 'red' : 'black'};
`

const PassWordInput = styled(Input)`
border-bottom: 1px solid ${({ errors }) => errors.type === 'password' ? 'rgba(255,0,0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
color: ${({ errors }) => errors.type === 'password' ? 'red' : 'black'};
`

const ButtonBox = styled.div`
display: flex;
flex-direction: column;
`

const Form = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { errors, validate } = useValidator()
  const { signIn } = useAuthenticator()

  //  Input 값 변경 시 동작 
  const onInputChangeHandler = () => {
    const emailValue = emailRef.current.value
    const passwordValue = passwordRef.current.value

    validate({ email: emailValue, password: passwordValue, fns: [checkEmail, checkRequired, checkPassowrd] })
  }

  // 버튼 클릭시 동작  비밀번호 예외?
  const onButtonClickHandler = () => {
    const { message } = errors
    if (message) {
      alert(message)
    }
    else {
      alert('로그인하였습니다.')
      signIn()
    }

  }

  return (
    <>
      <InputBox>
        <EmailInput placeholder="Email" type="email" onChange={onInputChangeHandler} ref={emailRef} errors={errors} />
        <PassWordInput placeholder="Password" type="password" onChange={onInputChangeHandler} ref={passwordRef} errors={errors} />
        <Link>아이디 / 비밀번호 찾기</Link>
      </InputBox>

      <ButtonBox>
        <Button onClick={onButtonClickHandler}>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </>
  )
}

export default Form