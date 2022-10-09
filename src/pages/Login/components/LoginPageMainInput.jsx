// import styled from 'styled-components';
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
// import Layout from 'components/items/Layout';
// import { useRef } from 'react';

// const LoginInputBox = styled(Layout)`
//   > a {
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 10px;
//     text-decoration: none;
//   }
// `;

// const isValidInput = (email, password) => {
//   return email.length && password.length
// }

// //  email password 입력 후 검증
// //  여기서  LoginUI에 대해 관리
// const LoginPagMainInput = ({ setSignData }) => {
//   const userEmail = useRef(null)
//   const userPassowrd = useRef(null)

//   const onInputChangeHandler = () => {
//     let email = userEmail.current.value
//     let password = userPassowrd.current.value
//     console.log(email, password)
//   }

//   return (
//     <LoginInputBox>
//       <Stylednput placeholder="Email" type="email" onChange={onInputChangeHandler} ref={userEmail} />
//       <Stylednput placeholder="Password" type="password" onChange={onInputChangeHandler} ref={userPassowrd} />
//       <Link>아이디 / 비밀번호 찾기</Link>
//     </LoginInputBox>
//   )
// };

// LoginPagMainInput.propTypes = {
//   setSignData: PropTypes.func
// }

// // displayName Error발생해서 넣음
// LoginPagMainInput.displayName = 'LoginPagMainInput'

// export default LoginPagMainInput;
