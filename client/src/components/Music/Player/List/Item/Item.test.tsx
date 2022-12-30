/* eslint-disable max-len */
import { renderWithProvider, screen, waitFor } from 'test-utils/rtkProvider';
import Item from './Item';
import userEvent from '@testing-library/user-event';
import { handleAddPlayer } from 'store/feature/music/PlayerSlice';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Player List Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const video_title = "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video";
  const video_img =
    'https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHBg8LcdNOe_-2cDY5dcNQqjw70w';
  const video_link = 'https://www.youtube.com/watch?v=fCO7f0SmrDc';

  test('음악 이미지를 누르면 재생할 음악을 Store에 저장한다.', async () => {
    const { store } = renderWithProvider(<Item video_img={video_img} video_title={video_title} number={1}></Item>);
    const music = { video_img, video_link, video_title, id: 1 };
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_image = screen.getByRole('img');
    await user.click(music_image);
    const storePlayMusic = store.getState().music.player.playmusic;
    expect(storePlayMusic).toStrictEqual(music);
  });
  test('음악 제목을 누르면 재생할 음악을 Store에 저장한다.', async () => {
    const { store } = renderWithProvider(<Item video_img={video_img} video_title={video_title} number={1}></Item>);
    const music = { video_img, video_link, video_title, id: 1 };
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_title = screen.getByText(video_title);
    await user.click(music_title);
    const storePlayMusic = store.getState().music.player.playmusic;
    expect(storePlayMusic).toStrictEqual(music);
  });

  test('현재 선택된 음악은 삭제할수 없다', async () => {
    const { store } = renderWithProvider(<Item video_img={video_img} video_title={video_title} number={1}></Item>);
    const remove_button = screen.getByRole('button');
    const music = { video_img, video_link, video_title, id: 1 };
    await waitFor(() => store.dispatch(handleAddPlayer(music)));
    const music_title = screen.getByText(video_title);
    await user.click(music_title);
    await user.click(remove_button);
    const alarm_text = store.getState().layout.alarm.text;
    expect(alarm_text).toBe('현재 선택중인 음악은 삭제할수없습니다.');
  });
  test('음악을 선택하면 스크롤이 움직여야한다. (이거는작성예정)', () => {});

  //   음악이 여러개니까 페이지 단위 테스팅 해야할거같다
  //   test('현재 선택되지 않은 음악은 삭제할수 있다', () => {});
});
