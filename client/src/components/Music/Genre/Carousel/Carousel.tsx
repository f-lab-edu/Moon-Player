import { useSwiper } from 'hooks/useSwiper';
import styled from 'styled-components';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import Flex from 'components/Global/style/Flex';
export const Carousel = ({ data }) => {
  const { swiper, handleNextSlide, handlePrevSlide } = useSwiper(data);
  return (
    <Layout direction="row">
      <StyledIconButton name="arrowLeft" size="2x" color="white" onClick={handlePrevSlide} />
      {swiper}
      <StyledIconButton name="arrowRight" size="2x" color="white" onClick={handleNextSlide} />
    </Layout>
  );
};
const Layout = styled(Flex)`
  margin-top: 10px;
`;
const StyledIconButton = styled(IconButton)`
  margin: 20px;
`;
export default Carousel;
