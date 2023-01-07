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
    <Root direction='row' alignItems='center'>
      <div style={{ flex: 1, height: '5px', overflow: 'hidden' }}>
        <Line strokeWidth={1} strokeLinecap='square' percent={elapsedTime} strokeColor={'#bF2b3C'} />
      </div>
      {/* <ProgressBarText>{currentTime} / {endTime}</ProgressBarText> */}
    </Root>
  );
};

export default ProgressBar;

const Root = styled(Flex)`
  color: rgba(255,255,255, 0.64);
  font-weight: 700;
  text-align: center;
`;
const ProgressBarText = styled.div`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: rgba(255,255,255, 0.64);
`;
