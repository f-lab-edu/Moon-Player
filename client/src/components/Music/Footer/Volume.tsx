import IconButton from 'components/Global/UI/IconButton/IconButton';
import styled from 'styled-components';

interface VolumeProps {
  onVolume: React.ChangeEventHandler<HTMLInputElement>;
  volume: string;
}
export const Volume = ({ onVolume, volume }: VolumeProps) => {
  return (
    <Layout>
      <IconButton name="volume" size="1x" color="white" />
      <VolumeSlider onChange={onVolume} volume={volume} trackColor="gray" thumbColor="white" />
    </Layout>
  );
};
export default Volume;

const Layout = styled.div`
  display: flex;
  align-items: center;
  color: gray;

  > :nth-child(1) {
    margin-right: 20px;
  }
`;
interface VolumeSliderProps {
  volume: string;
  trackColor: string;
  thumbColor: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const VolumeSlider = styled.input.attrs<VolumeSliderProps>(({ volume }) => ({
  type: 'range',
  min: '1',
  max: '100',
  value: volume,
}))<VolumeSliderProps>`
  border-radius: 7px;
  cursor: pointer;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 8px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -1.5px;
  }

  /* 파이어폭스 */
  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 8px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -1.5px;
  }
`;

VolumeSlider.defaultProps = {
  thumbColor: 'white',
  trackColor: 'gray',
};
