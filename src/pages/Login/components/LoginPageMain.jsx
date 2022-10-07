import styled from "styled-components";
import Avatar from "components/items/Avatar";
import LoginPageMainSignBox from "./items/LoginPageMainSignBox";
import LoginPagMainInputBox from "./items/LoginPageMainInputBox";
import { useEffect, useState } from "react";

const LoginPageMainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  >:last-child{
    width: 100%;
    margin-top: 15px;
  }
`;



const LoginPageMain = () => {
  const [SignData, setSignData] = useState()
  const [isSign, setSign] = useState(true)


  useEffect(() => {
    if (SignData) {
      setSign(false)
    }
    else {
      setSign(true)
    }
  }, [SignData])



  return (
    <LoginPageMainLayout>
      <Avatar />
      <LoginPagMainInputBox setSignData={setSignData} />
      <LoginPageMainSignBox isSign={isSign} SignData={SignData} />
    </LoginPageMainLayout>
  );
};



export default LoginPageMain;
