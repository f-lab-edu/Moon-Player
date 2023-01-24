import styled from 'styled-components';
import { Line } from 'rc-progress';
import Flex from 'components/Global/style/Flex';
interface ProgressBarProps {
  currentTime: string;
  endTime: string;
  elapsedTime: number;
}

export const ProgressBar = ({ currentTime, endTime, elapsedTime }: ProgressBarProps) => {
  return (
    <Layout direction="row" alignItems="center">
      <Box>
        <Line strokeWidth={1} strokeLinecap="square" percent={elapsedTime} strokeColor={'#bF2b3C'} />
      </Box>
    </Layout>
  );
};

export default ProgressBar;
const Layout = styled(Flex)`
  color: rgba(255, 255, 255, 0.64);
  font-weight: 700;
  text-align: center;
`;
const Box = styled.div`
  flex: 1;
  height: 5px;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    height: 15px;
  }
`;
