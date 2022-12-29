import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Item } from 'components/Music/Genre/Item';

export const Carousel = ({ data }) => {
  const genreItems = data.map(({ genre_img, genre_id }) => (
    <Item genre_img={genre_img} genre_id={genre_id} key={genre_id}></Item>
  ));
  return (
    <Root>
      <StyledSlider {...settings}>{genreItems}</StyledSlider>
    </Root>
  );
};
const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  dotsClass: 'dots_custom',
  appendDots: (dots: any) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

const Root = styled.div`
  margin: 10px 50px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }
  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }
  .dots_custom li.slick-active button {
    background-color: yellow;
  }
`;
export default Carousel;
