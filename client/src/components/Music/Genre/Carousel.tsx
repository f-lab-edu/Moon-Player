import styled from 'styled-components';
import Flex from 'components/Common/UI/Flex';
import { IconButton } from 'components/Common/UI/IconButton';
import { Genre } from 'types/store';
import { Card } from 'components/Music/Genre/Card';
import { useCarousel } from 'hooks/useCarousel';

interface CarouselProps {
  children: Genre[];
}

type CardProps = Pick<Genre, 'genre_img' | 'genre_id'>;

export const Carousel = ({ children }: CarouselProps) => {
  const { handleNextSlide, handlePrevSlide, slideRef } = useCarousel<HTMLDivElement>();

  const genreCards = children.map(({ genre_img, genre_id }: CardProps) => (
    <Card genre_img={genre_img} key={genre_id} genre_id={genre_id}></Card>
  ));
  return (
    <Root direction="row">
      <IconButton onClick={handlePrevSlide} icon="arrowLeft" size="3x" color="white"></IconButton>
      <CarouselContainer>
        <CarouselBox ref={slideRef} direction="row">
          {genreCards}
        </CarouselBox>
      </CarouselContainer>
      <IconButton onClick={handleNextSlide} icon="arrowRight" size="3x" color="white"></IconButton>
    </Root>
  );
};

const Root = styled(Flex)`
  padding: 0px 20px;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 1100px;
`;

const CarouselBox = styled(Flex)`
  gap: 5px;
`;

export default Carousel;
