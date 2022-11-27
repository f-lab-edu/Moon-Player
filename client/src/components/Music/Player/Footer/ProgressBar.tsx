import styled from 'styled-components';
import { Line } from 'rc-progress';
interface ProgressBarProps {
  currentTime: string;
  endTime: string;
  elapsedTime: number;
}

export const ProgressBar = ({ currentTime, endTime, elapsedTime }: ProgressBarProps) => {
  return (
    <Root>
      <Line strokeWidth={3} percent={elapsedTime} strokeColor={'white'} />
      <ProgressBarText>
        {currentTime} / {endTime}
      </ProgressBarText>
    </Root>
  );
};

export default ProgressBar;

const Root = styled.div`
  color: white;
  font-weight: 700;
  text-align: center;
`;
const ProgressBarText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: 10px;
  text-align: center;
  color: white;
`;
