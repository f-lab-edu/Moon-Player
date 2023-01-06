import styled from 'styled-components';
import { Line } from 'rc-progress';
interface ProgressBarProps {
  currentTime: string;
  endTime: string;
  elapsedTime: number;
}

export const ProgressBar = ({ currentTime, endTime, elapsedTime }: ProgressBarProps) => {
  return (
    <Layout>
      <Line strokeWidth={3} percent={elapsedTime} strokeColor={'white'} />
      <ProgressBarText>
        {currentTime} / {endTime}
      </ProgressBarText>
    </Layout>
  );
};

export default ProgressBar;

const Layout = styled.div`
  color: white;
  font-weight: 700;
  text-align: center;
`;
const ProgressBarText = styled.div`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: white;
`;
