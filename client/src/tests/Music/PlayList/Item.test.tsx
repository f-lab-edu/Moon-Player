import { renderWithProvider, screen, waitFor } from '../../../test-utils/index';
import Item from 'components/Music/PlayList/Item';
import preview from 'jest-preview';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
describe('PlayList Item 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const playListImage = faker.image.animals();

  test('PlayList Item 컴포넌트가 속성에 맞게 렌더링된다', () => {
    const { store } = renderWithProvider(<Item id={1} video_title={'아이유'} video_img={playListImage}></Item>);
    const video_title = screen.getByText('아이유');
    const video_image = screen.getByRole('img');
    expect(video_title).toBeInTheDocument();
    expect(video_image).toBeInTheDocument();
  });

  test('음악 추가 버튼을 누르면 Player 에 저장이 된다.', () => {
    const { store } = renderWithProvider(<Item id={1} video_title={'아이유'} video_img={playListImage}></Item>);
  });

  test('현재 음악이 Player에 저장이 되어있으면 Player에 저장 되면 안된다.', () => {
    const { store } = renderWithProvider(<Item id={1} video_title={'아이유'} video_img={playListImage}></Item>);
  });
  test('현재 음악이 Player에 저장이 되어있으면 음악 추가 버튼을 누를수가 없다.', () => {
    const { store } = renderWithProvider(<Item id={1} video_title={'아이유'} video_img={playListImage}></Item>);
  });
});
