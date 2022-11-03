import { Line } from 'rc-progress';
import styled from 'styled-components';
import { timeFormat } from 'utils/Player';
import { useState, useEffect } from 'react';

const Root = styled.div`
  color: #6633cc;
  font-weight: 900;
  > :last-child {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Progressbar = ({ time }) => {
  const [currentTime, setCurrentTime] = useState();
  const [endTime, setEndTime] = useState();
  const [elapsedTime, setElapsedTime] = useState();
  useEffect(() => {
    setCurrentTime(timeFormat(time.currentTime));
    setEndTime(timeFormat(time.endTime));
    setElapsedTime(Math.floor((time.currentTime / time.endTime) * 100));
  }, [time]);

  return (
    <Root>
      <Line strokeWidth={2} percent={elapsedTime} strokeColor={'#6633cc'} />
      <div>
        {currentTime} / {endTime}
      </div>
    </Root>
  );
};

export default Progressbar;
