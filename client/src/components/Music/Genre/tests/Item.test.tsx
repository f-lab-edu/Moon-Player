import { renderWithProvider, screen, waitFor } from '../../../../test-utils/index';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

describe('Genre Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const image_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';
  test('Genre Item을 클릭하면 genre_id에 맞게 PlayList Store의 값이 갱신된다.', async () => {
    const { store } = renderWithProvider(<Item genre_img={image_url} genre_id={1}></Item>);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('opacity', '0.2');
    await user.click(image);
    await waitFor(() => {
      expect(store.getState().music.playList.musicList.id).toEqual(1);
    });
  });
  test('Genre Item의 기본 opacity는 0.2이고 클릭하면 opacity는 1이 된다.', async () => {
    renderWithProvider(<Item genre_img={image_url} genre_id={1}></Item>);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('opacity', '0.2');
    await user.click(image);
    await waitFor(() => {
      expect(image).toHaveStyleRule('opacity', '1');
    });
  });
});

describe('Genre Item 컴포넌트 스타일 검증 테스트', () => {
  const mock_url = 'https://i.picsum.photos/id/542/250/150.jpg?hmac=g5jfJQNDTGZK6UnZfdQvRrZdtlsSz8X0Oa-5NJI_-nc';

  test('opcacity 기본값은 0.2이다', () => {
    renderWithProvider(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('opacity', '0.2');
  });
  test('이미지 크기는 width 250px , hegiht 150px 이어야한다', () => {
    renderWithProvider(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyle({
      width: '250px',
      height: '150px',
    });
  });
  test('이미지에는 커서 pointer가 존재해야한다.', () => {
    renderWithProvider(<Item genre_img={mock_url} genre_id={1} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyleRule('cursor', 'pointer');
  });
});
