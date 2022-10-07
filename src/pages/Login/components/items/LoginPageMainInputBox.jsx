import styled from "styled-components";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import Layout from "components/items/Layout";
import { useRef } from "react";

import { isValidInput } from "pages/Login/utils/LoginPage";

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



const LoginPagMainInputBox = ({ setSignData }) => {
  const userInfo = useRef([])

  const onInputChangeHandler = () => {
    const email = userInfo.current[0].value
    const password = userInfo.current[1].value

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
      <Stylednput placeholder="Email" type="email" onChange={onInputChangeHandler} ref={(e) => (userInfo.current[0] = e)} />
      <Stylednput placeholder="Password" type="password" onChange={onInputChangeHandler} ref={(e) => (userInfo.current[1] = e)} />
      <Link>아이디 / 비밀번호 찾기</Link>
    </LoginInputLayout>
  )
};

LoginPagMainInputBox.propTypes = {
  setSignData: PropTypes.func
}

// displayName Error발생해서 넣음
LoginPagMainInputBox.displayName = "LoginPagMainInputBox"

export default LoginPagMainInputBox;
