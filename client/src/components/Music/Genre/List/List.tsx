import { useSwiper } from 'hooks/useSwiper';
import styled from 'styled-components';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import Flex from 'components/Global/style/Flex';
import { Item } from 'components/Music/Genre/Item/Item';
import { useAppSelector } from 'hooks/useReduxStore';
import { SwiperSlide } from 'swiper/react';

export const List = () => {
  const genreItems = useAppSelector((state) => state.music.genre.list);

  // 외부라이브러리 노출 ?
  const slideItems = genreItems.map(({ image_url, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <Item image_url={image_url} key={genre_id} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  const { swiper, handleNextSlide, handlePrevSlide } = useSwiper(slideItems);

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
export default List;
