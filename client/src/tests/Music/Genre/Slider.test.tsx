import { renderWithProvider, screen, waitFor } from '../../../test-utils/index';

import Slider from '../../../components/Music/Genre/Slider';
import userEvent from '@testing-library/user-event';

// import preview from 'jest-preview';

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
// 작성중..

// jest-preview로 디버깅하니까 스와이퍼 모듈이 제대로 import 되지않는거같은데.. 테스팅 가상돔에서는 어떨지모르겟네..
// 스와이퍼 모듈이 제대로 import 되지않아서 기능이 제대로 실행안되는듯..

describe('Slider 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  test('Genre Item들이 올바르게 렌더링되었다.', () => {
    renderWithProvider(<Slider>{mockData}</Slider>);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(9);
    // preview.debug();
  });
  test('next 버튼을 누르면 다음슬라이드로 이동한다.', async () => {
    renderWithProvider(<Slider>{mockData}</Slider>);
    const images = screen.getAllByRole('img');
    const firstImage = images[0];
    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    const nextButton = buttons[1];
    expect(firstImage).toBeInTheDocument();
    await user.click(nextButton);
    await waitFor(() => {
      expect(firstImage).not.toBeInTheDocument();
    });
  });
  test('이전 슬라이드 없을떄 prev 버튼을 누르면 현재 슬라이드를 유지한다.', () => {
    renderWithProvider(<Slider>{mockData}</Slider>);
    // const images = screen.getAllByRole('img');
    // expect(images).toHaveLength(9);
  });
  test('마지막 슬라이드 일떄 next를 누르면 현재 슬라이드를 유지한다.', () => {
    renderWithProvider(<Slider>{mockData}</Slider>);
    // const images = screen.getAllByRole('img');
    // expect(images).toHaveLength(9);
  });
});
