import { Line } from 'rc-progress';
import styled from 'styled-components';
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
  const [timeState, setTime] = useState(time);
  useEffect(() => {
    setTime(time);
  }, [time]);

  return (
    <Root>
      <Line strokeWidth={3} percent={timeState.elapsedTime} strokeColor={'white'} />
      <Text>
        {timeState.currentTime} / {timeState.endTime}
      </Text>
    </Root>
  );
};

export default Progressbar;
