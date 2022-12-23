import { render, screen, waitFor } from '../../../../test-utils/index';
import Item from '../Item';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../../store/feature/music/PlayListSlice';
const middlewares = [];
const mockStore = configureStore(middlewares);

// 전역 스토어 값을 감지못하네..

// describe('Genre Item 컴포넌트 기능 테스트', () => {
//   const user = userEvent.setup();
//   const image_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';

//   test('Item을 클릭하면 PlayList Store가 갱신되고 opacity가 1이된다.', async () => {
//     const store = mockStore(initialState);
//     render(<Item genre_img={image_url} genre_id={1} />, store);
//     const image = screen.getByRole('img');
//     expect(image).toHaveStyleRule('opacity', '0.2');
//     await user.click(image);
//     // await store.dispatch({ type: 'musicPlayList', id: 1 });
//     // expect(store.getState()).toEqual({});
//     // await waitFor(() => {
//     //   expect(screen.queryByRole('img')).toHaveStyleRule('opacity', '1');
//     // });
//   });
// });

describe('Genre Item 컴포넌트 스타일 검증 테스트', () => {
  const mock_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';

  test('opcacity 기본값은 0.2이다', () => {
    render(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('opacity', '0.2');
  });
  test('이미지 크기는 width 250px , hegiht 150px 이어야한다', () => {
    render(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyle({
      width: '250px',
      height: '150px',
    });
  });
  test('이미지에는 커서 pointer가 존재해야한다.', () => {
    render(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('cursor', 'pointer');
  });
});
