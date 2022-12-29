import { renderWithProvider, screen, waitFor, within } from '../../../test-utils/index';

import Slider from '../../../components/Music/Genre/Carousel';
import userEvent from '@testing-library/user-event';
import preview from 'jest-preview';
const mockData = [
  {
    genre: '멜론 TOP 100',
    genre_img:
      'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w',
    genre_id: 1,
  },
  {
    genre: 'NCS Top 200 음악',
    genre_img:
      'https://i.ytimg.com/vi/K4DyBUG242c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLDL_rZFJCJ_xo0iKbc0KRhMYuUU7g',
    genre_id: 2,
  },
  {
    genre: 'Mr sucide PlayList',
    genre_img:
      'https://i.ytimg.com/vi/uhA55hYnoHw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLDb06XvGg2OtlQbh8Cr0Ko-ldDfHA',
    genre_id: 3,
  },
  {
    genre: 'NF 노래모음',
    genre_img:
      'https://i.ytimg.com/vi/fibYknUCIU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLAVtb7GbhzYnrQKhbFDc9GzjZdLcw',
    genre_id: 4,
  },
  {
    genre: '아이유 노래 모음',
    genre_img:
      'https://i.ytimg.com/vi/m7mvpe1fVa4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDuDeCnL6i6LjLSWQ97QU8iVUac_w',
    genre_id: 5,
  },
  {
    genre: 'Illenium 플레이 리스트',
    genre_img:
      'https://i.ytimg.com/vi/ZCu2gwLj9ok/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLCWkB9RAt2vODEZ6o_BOfmbQReASg',
    genre_id: 6,
  },
  {
    genre: '윤하 플레이 리스트',
    genre_img:
      'https://i.ytimg.com/vi/58IEh6YkuzQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLADvOlohZEVGAYN9Y0Tr4WQxkhnWQ',
    genre_id: 7,
  },
  {
    genre: '트와이스 플레이 리스트',
    genre_img:
      'https://i.ytimg.com/vi/0rtV5esQT6I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA0h64191yWHSUjPv0BdPOaM42GqA',
    genre_id: 8,
  },
  {
    genre: 'BTS 플레이 리스트',
    genre_img:
      'https://i.ytimg.com/vi/XsX3ATc3FbA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLBqTxIwItxaOhWhHf_t07AGhfEswA',
    genre_id: 9,
  },
];
describe('Carousel 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  test('Carousel 컴포넌트의 첫 슬라이드 아이템은 6개 다.', async () => {
    renderWithProvider(<Slider data={mockData}></Slider>);
    const images = await screen.findAllByRole('img');

    expect(images).toHaveLength(6);
  });

  test('페이지네이션 버튼을 누르면 페이지네이션 버튼에 맞는 슬라이드가 활성화된다.', async () => {
    renderWithProvider(<Slider data={mockData}></Slider>);
    const Paginations = await screen.findAllByRole('button');
    const slickSlides = screen.getAllByRole('listitem');
    const [slideOne, slideTwo] = [slickSlides[0], slickSlides[1]];
    const [PaginationOne, PaginationTwo] = [Paginations[0], Paginations[1]];
    expect(slideOne).toHaveClass('slick-active');
    await user.click(PaginationTwo);
    expect(slideTwo).toHaveClass('slick-active');
  });
});
