/* eslint-disable max-len */
import { renderWithProvider, screen, waitFor } from 'test-utils/rtkProvider';
import Item from 'components/Music/PlayList/Item/Item';
import userEvent from '@testing-library/user-event';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';

describe('PlayList Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const video_title = "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video";
  const video_img =
    'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w';
  const video_link = 'https://www.youtube.com/watch?v=fCO7f0SmrDc';

  renderWithProvider(<Item id={1} video_title={video_title} video_img={video_img}></Item>);
  test('PlayList Item 컴포넌트가 속성에 맞게 렌더링된다', () => {
    const title = screen.getByText(`(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video`);
    const image = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('추가 버튼을 누르면 Player에 저장이 된다.', async () => {
    const { store } = renderWithProvider(<Item id={1} video_title={video_title} video_img={video_img}></Item>);
    // 1. 장르에 대한 음악리스트 저장
    await waitFor(() => store.dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1')));
    const addButton = screen.getByRole('button');
    await user.click(addButton);
    const playerItemStore = store.getState().music.player.playerItems;
    const expetctedData = [{ id: 1, video_img, video_link, video_title }];
    expect(playerItemStore).toEqual(expetctedData);
  });

  test('Player에 추가된 음악의 버튼은 비활성화가 된다.', async () => {
    const { store } = renderWithProvider(<Item id={1} video_title={video_title} video_img={video_img}></Item>);
    await waitFor(() => store.dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1')));
    const addButton = screen.getByRole('button');
    await user.click(addButton);
    expect(addButton).toHaveStyleRule('pointer-events', 'none');
  });
});
