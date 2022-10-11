import styled from "styled-components";

const UserNavLayout = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: 30vw;
color:white;
font-size: 30px;
gap: 30px;
`

const UserNav = () => {
  return <UserNavLayout>
    <div>홈으로</div>
    <div>내정보</div>
    <div>문의</div>
    <div>회원탈퇴</div>

  </UserNavLayout>
}
export default UserNav