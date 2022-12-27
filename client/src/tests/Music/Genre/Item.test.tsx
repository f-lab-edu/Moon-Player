import { renderWithProvider, screen, waitFor } from '../../../test-utils/index';
import Item from '../../../components/Music/Genre/Item';
import userEvent from '@testing-library/user-event';

describe('Genre Item 컴포넌트 기능 테스트', () => {
  const mock_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';
  const user = userEvent.setup();
  test('Genre Item을 클릭하면 , 선택된 Genre Item에 맞게 PlayList Store의 값이 갱신이 되어야한다.', async () => {
    const { store } = renderWithProvider(<Item genre_img={mock_url} genre_id={1}></Item>);
    const image = screen.getByRole('img');
    await user.click(image);
    await waitFor(() => {
      expect(store.getState().music.playList.musicList.id).toEqual(1);
    });
  });
  test('Genre Item에는 커서가 존재해야만하고 Default Opacity는 0.2이다. 클릭하면 Opacity는 1이 된다.', async () => {
    renderWithProvider(<Item genre_img={mock_url} genre_id={1}></Item>);
    const image = screen.getByRole('img');
    expect(image).toHaveStyle({
      opacity: '0.2',
      cursor: 'pointer',
    });
    await user.click(image);
    await waitFor(() => {
      expect(image).toHaveStyleRule('opacity', '1');
    });
  });
});
