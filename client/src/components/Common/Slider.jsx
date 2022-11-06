import styled from 'styled-components';

export const Slider = styled.input.attrs(({ volume }) => ({
  type: 'range',
  min: '1',
  max: '100',
  value: volume,
}))`
  border-radius: 7px;
  cursor: pointer;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 13px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 21px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -3.5px;
  }

  /* 파이어폭스 */
  &::-moz-range-track {
    width: 100%;
    height: 13px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 21px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -3.5px;
  }
`;

Slider.defaultProps = {
  thumbColor: 'white',
  trackColor: 'gray',
};

export default Slider;
