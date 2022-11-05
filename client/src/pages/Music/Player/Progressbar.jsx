import { Line } from 'rc-progress';
import styled from 'styled-components';
import { formatTime } from 'utils/Player';
import { useState, useEffect } from 'react';
import Text from 'components/Common/Text';

const Root = styled.div(
  ({ theme }) => `
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  text-align:center;
`
);
export const Progressbar = ({ time }) => {
  const [currentTime, setCurrentTime] = useState();
  const [endTime, setEndTime] = useState();
  const [elapsedTime, setElapsedTime] = useState();
  useEffect(() => {
    setCurrentTime(formatTime(time.currentTime));
    setEndTime(formatTime(time.endTime));
    setElapsedTime(Math.floor((time.currentTime / time.endTime) * 100));
  }, [time]);

  return (
    <Root>
      <Line strokeWidth={3} percent={elapsedTime} strokeColor={'white'} />
      <Text>
        {currentTime} / {endTime}
      </Text>
    </Root>
  );
};

export default Progressbar;
