/* eslint-disable max-len */
import { renderWithProvider, screen, waitFor } from 'test-utils/rtkProvider';
import Item from 'components/Music/PlayList/Item/Item';
import userEvent from '@testing-library/user-event';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';

describe('PlayList Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const name = "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video";
  const img_url =
    'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w';
  const source_url = 'https://www.youtube.com/watch?v=fCO7f0SmrDc';

  renderWithProvider(<Item id={1} name={name} img_url={img_url}></Item>);
  test('PlayList Item 컴포넌트가 속성에 맞게 렌더링된다', () => {
    const title = screen.getByText(`(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video`);
    const image = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('음악 추가 버튼을 누르면 Player에 저장이 된다.', async () => {
    const { store } = renderWithProvider(<Item id={1} name={name} img_url={img_url}></Item>);
    // 1. 장르에 대한 음악리스트 저장
    await waitFor(() => store.dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1')));
    const addButton = screen.getByRole('button');
    await user.click(addButton);
    const playerItemStore = store.getState().music.player.list;
    const expetctedData = [{ id: 1, img_url, source_url, name }];
    expect(playerItemStore).toEqual(expetctedData);
  });

  test('Player에 추가된 음악의 추가 버튼은 비활성화가 된다.', async () => {
    const { store } = renderWithProvider(<Item id={1} name={name} img_url={img_url}></Item>);
    await waitFor(() => store.dispatch(fetchmusicList('http://localhost:4000/api/music/genre/1')));
    const addButton = screen.getByRole('button');
    await user.click(addButton);
    expect(addButton).toHaveStyleRule('pointer-events', 'none');
  });
});
