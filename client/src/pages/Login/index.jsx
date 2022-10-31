import styled from 'styled-components';
import Title from 'components/Common/Title';
import Form from './Form';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  height: 100vh;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  > :last-child {
    width: 100%;
    margin-top: 15px;
  }
  margin: 0px 0px 15px 0px;

  @media screen and (max-width: 700px) {
    width: 80vw;
  }
`;

const Avatar = styled.img.attrs({
  src: 'images/Loginlogo.png',
})`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  margin: 30px 0 40px 0;
  transform: scale(1.2);
`;

// 한개의 페이지에 여러 커스텀 훅 사용
const LoginPage = () => {
  return (
    <Layout>
      <Header>
        <Title>Moon Player</Title>
      </Header>
      <Main>
        <Avatar />
        <Form />
      </Main>
    </Layout>
  );
};

export default LoginPage;
