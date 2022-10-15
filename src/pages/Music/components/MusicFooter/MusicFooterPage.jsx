import styled from 'styled-components';

const MusicPlayerFooterLayout = styled.footer`
  display: flex;
  justify-content:center;
  align-items: center;
 
`

const Text = styled.h3`
font-size: 13px;
`

const MusicPageFooter = () => {
  return <MusicPlayerFooterLayout>
    <Text>Copyrightⓒ2022 문준영 All rights reserved.</Text>
  </MusicPlayerFooterLayout>

}

export default MusicPageFooter