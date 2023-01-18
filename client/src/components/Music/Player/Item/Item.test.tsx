/* eslint-disable max-len */
import { renderWithProvider, screen, waitFor } from 'test-utils/rtkProvider';
import Item from './Item';
import userEvent from '@testing-library/user-event';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Player List Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const name = "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video";
  const img_url =
    'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w';
  const source_url = 'https://www.youtube.com/watch?v=fCO7f0SmrDc';
  const id = 1;

  const music = { img_url, source_url, name, id: id };

  test('음악 이미지를 누르면 음악이미지에 대한 음악은 Player Store에 저장되어야한다.', async () => {
    const { store } = renderWithProvider(<Item img_url={img_url} name={name} source_url={source_url} id={id}></Item>);

    // 미리 playerItems에 추가
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_image = screen.getByRole('img');
    await user.click(music_image);
    const playerplayMusicStore = store.getState().music.player.playingMusic;
    expect(playerplayMusicStore).toStrictEqual(music);
  });
  test('음악 제목을 누르면 음악 제목에 대한 음악을 Player Store에 저장되어야한다.', async () => {
    const { store } = renderWithProvider(<Item img_url={img_url} name={name} source_url={source_url} id={id}></Item>);
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_title = screen.getByText(name);
    await user.click(music_title);
    const playerplayMusicStore = store.getState().music.player.playingMusic;
    expect(playerplayMusicStore).toStrictEqual(music);
  });

  test('현재 Player에 선택된 음악은 삭제할수 없다', async () => {
    const { store } = renderWithProvider(<Item img_url={img_url} name={name} source_url={source_url} id={id}></Item>);
    const remove_button = screen.getByRole('button');
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_title = screen.getByText(name);
    await user.click(music_title);
    await user.click(remove_button);

    // 단일 컴포넌트 테스팅이여서 alarm 컴포넌트 생김유무로 판단 x
    // const alarm_text = store.getState().layout.alarm.text;
    // expect(alarm_text).toBe('현재 재생중인 음악은 삭제할수없습니다.');
  });
});
