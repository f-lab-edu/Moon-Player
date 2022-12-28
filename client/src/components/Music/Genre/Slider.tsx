import useSwiper from 'hooks/useSwiper';
import IconButton from 'components/Global/IconButton';
import styled from 'styled-components';
import { Genre } from 'types/store';
import Flex from 'components/Global/Flex';

interface SliderProps {
  children: Genre[];
}

export const Slider = ({ children }: SliderProps) => {
  const { swiper, handleNextSlide, handlePrevSlide } = useSwiper(children);

  return (
    <SliderContainer direction="row">
      <StyledIconButton icon="arrowLeft" size="3x" color="red" onClick={handlePrevSlide}></StyledIconButton>
      {swiper}
      <StyledIconButton icon="arrowRight" size="3x" color="red" onClick={handleNextSlide}></StyledIconButton>
    </SliderContainer>
  );
};
const SliderContainer = styled(Flex)`
  padding: 0px 30px 0px 40px;
`;

const StyledIconButton = styled(IconButton)`
  padding: 20px;
`;
export default Slider;
