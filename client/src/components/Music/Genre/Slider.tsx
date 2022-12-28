import useSwiper from 'hooks/useSwiper';
import IconButton from 'components/Global/IconButton';
import styled from 'styled-components';
import Flex from 'components/Global/Flex';
export const Slider = ({ data }) => {
  const { swiper, handleNextSlide, handlePrevSlide, swiperModule } = useSwiper(data);
  console.log(swiperModule?.activeIndex);

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
