import styled from 'styled-components';
import Text from 'components/Common/Text';
import FlexCenterColumn from 'components/Common/FlexCenterColumn';
const Root = styled.div`
  margin: 0 auto;
`;
const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: 20px;
`;
const ContentText = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
`;

const Flex = styled(FlexCenterColumn)`
  margin: 30px;
`;
export const Info = () => {
  return (
    <Root>
      <Flex>
        <Title>Moon Player</Title>
        <ContentText> 사용자에게 무료로 유튜브 음악을 들려주는 서비스입니다.</ContentText>
        <ContentText>
          프로젝트를 수행하게 된 계기는 학부시절 최신 음악 차트의 음원을 무료로 듣고 싶어서 만들게 되었습니다.
        </ContentText>
        <ContentText> 여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다. </ContentText>
      </Flex>
    </Root>
  );
};

export default Info;
