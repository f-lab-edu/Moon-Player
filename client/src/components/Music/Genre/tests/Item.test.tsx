import { renderWithProvider, screen, waitFor } from '../../../../test-utils/index.js';
import Item from '../Item';
import userEvent from '@testing-library/user-event';
// 전역 스토어 값을 감지못하네..

describe('Genre Item 컴포넌트', () => {
  //   test('서버로부터 온 데이터 렌더링이 검증유무', () => {});
  const user = userEvent.setup();
  test('Item을 누르면 opacity가 1.0이된다.', async () => {
    const image_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';
    renderWithProvider(<Item genre_img={image_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('opacity', '0.2');
    await user.click(image);
    await waitFor(() => {
      expect(screen.queryByRole('img')).toHaveStyleRule('opacity', '1');
    });
  });
});

// test('서버로부터 온 이미지 크기는 width 250px hegiht 150px 이어야한다,'()=>{

// });
