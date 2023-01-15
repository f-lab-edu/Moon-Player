import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Item } from '../components/Music/Genre/Item/Item';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
export const useSwiper = (items) => {
  const dispatch = useAppDispatch();
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();
  const handleNextSlide = () => {
    if (!swiperModule) return;
    swiperModule.slideNext(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${idx}`));
  };
  const handlePrevSlide = () => {
    if (!swiperModule) return;
    swiperModule?.slidePrev(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${idx}`));
  };

  const genreItems = items.map(({ image_url, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <Item genre_img={image_url} key={genre_id} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  const swiper = (
    <Swiper {...DEFAULT_SETTING} onSwiper={setSwiperModule}>
      {genreItems}
    </Swiper>
  );

  return { swiper, handleNextSlide, handlePrevSlide };
};
const DEFAULT_SETTING: SwiperProps = {
  modules: [Pagination],
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  slidesPerView: 5,
  slidesPerGroup: 5,
  allowTouchMove: false,
  loopPreventsSlide: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
  },
};
