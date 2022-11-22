import styled from 'styled-components';
import { StyledProps } from 'types/app';

const IconName: IconName = {
  Google: 'images/googleLogo.svg',
  Kakao: 'images/kakaoLogo.svg',
  Naver: 'images/NaverLogo.png',
};
interface IconName {
  [key: string]: string | undefined;
}

// 인덱스 시그니처의 단점 => 주어진 키값이 객체 안에 존재안할수도있음

interface IconProps extends StyledProps {
  name: string;
}
export const Icon = styled.img.attrs<IconProps>(({ name }) => ({
  src: IconName[name],
}))<IconProps>`
  max-width: 100%;
  object-fit: fill;
`;

export default Icon;
