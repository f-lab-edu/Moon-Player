import { Text } from 'components/Common/Text';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { assignURL } from 'utils/webAPI';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { fetchUserInfo } from 'store/feature/user/UserSlice';
const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

const Button = styled.button(
  ({ color }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin: 15px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color:${color};
  font-weight: bold;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity:0.6;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
  }

  &:disabled {
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    cursor: default;
    opacity: 0.5;
    background: #6633cc;
  }
`
);
const Icon = styled.img.attrs((props) => ({
  src: props.google ? 'images/googleLogo.svg' : props.kakao ? 'images/kakaoLogo.svg' : 'images/NaverLogo.png',
}))`
  position: absolute;
  left: 0;
  margin-left: 10px;
  height: 30px;
  width: 30px;
  object-fit: fill;
`;

export const SocialForm = () => {
  const { signIn, isValid } = useAuthenticator();
  const dispatch = useDispatch();

  // 리다이렉션시 처리
  useEffect(() => {
    dispatch(fetchUserInfo());
    signIn();
  }, [isValid]);
  const handleGoogleLogin = () => assignURL();
  return (
    <Root>
      <Button color="#5c79f1" onClick={handleGoogleLogin}>
        <Icon google />
        <Text color="white">Google 로그인</Text>
      </Button>
      <Button color="#1cc802">
        <Icon />
        <Text>네이버 로그인</Text>
      </Button>
      <Button color="#ffeb3b">
        <Icon kakao />
        <Text color="black">카카오 로그인</Text>
      </Button>
    </Root>
  );
};
