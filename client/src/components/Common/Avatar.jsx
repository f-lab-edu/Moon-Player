import styled from 'styled-components';

const Avatar = styled.img.attrs({
  src: 'images/Loginlogo.png'
})`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  object-fit:fill;
  margin: 30px 0 40px 0;
  transform:scale(1.2);
`;

export default Avatar