import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Layout from 'components/items/Layout';
import { useRef } from 'react';

const LoginInputLayout = styled(Layout)`
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const Stylednput = styled.input`
  width: 500px;
  height: 40px;
  border: 0;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline-width: 0;
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
`;

const isValidInput = (email, password) => {
  return email.length && password.length
}

const LoginPagMainInputBox = ({ setSignData }) => {
  const userEmail = useRef(null)
  const userPassowrd = useRef(null)

  const onInputChangeHandler = () => {
    let email = userEmail.current.value
    let password = userPassowrd.current.value
    // email password 둘다 값이 들어가면 SignData로 지정
    if (isValidInput(email, password)) {
      setSignData({ email, password })
    }
    // 없으면 null
    else {
      setSignData(null)
    }
  }

  return (
    <LoginInputLayout>
      <Stylednput placeholder="Email" type="email" onChange={onInputChangeHandler} ref={userEmail} />
      <Stylednput placeholder="Password" type="password" onChange={onInputChangeHandler} ref={userPassowrd} />
      <Link>아이디 / 비밀번호 찾기</Link>
    </LoginInputLayout>
  )
};

LoginPagMainInputBox.propTypes = {
  setSignData: PropTypes.func
}

// displayName Error발생해서 넣음
LoginPagMainInputBox.displayName = 'LoginPagMainInputBox'

export default LoginPagMainInputBox;
