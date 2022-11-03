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
    background: #fa7cd7;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 21px;
    width: 30px;
    border-radius: 7px;
    background: #6633cc;
    cursor: pointer;
    margin-top: -3.5px;
  }
`;
export default Slider;
