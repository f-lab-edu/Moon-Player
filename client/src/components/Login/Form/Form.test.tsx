import { renderWithProvider, screen } from 'test-utils/rtkProvider';
import * as auth from 'utils/auth';
import { Form } from './Form';

import userEvent from '@testing-library/user-event';
import { mockAssignUrl } from 'mockSetting/location/assign.js';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MusicPage from 'pages/Music';

// 소셜로그인 서버에 대한 메소드 모킹
describe('Form 컴포넌트 기능 테스트', () => {
  mockAssignUrl();
  test('구글 로그인 버튼을 클릭하면 MusicPage로 이동한다.', async () => {
    const user = userEvent.setup();
    const mockAssignAuthURL = jest.spyOn(auth, 'assignAuthURL');
    const mockgetCode = jest.spyOn(auth, 'getCode').mockReturnValue('Google');
    const mockgetRequestForOauth = jest
      .spyOn(auth, 'getRequestForOauth')
      .mockReturnValue({ REQUEST_URI: 'auth/google', REQUEST_BODY: '123' });

    const { store } = renderWithProvider(
      <MemoryRouter>
        <Routes>
          <Route path={'/'} element={<Form />}></Route>
          <Route path={'/music'} element={<MusicPage />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const googlebutton = screen.getByRole('button', { name: 'Google 로그인' });
    await user.click(googlebutton);
    const token = store.getState().user.data.access_token;

    expect(mockAssignAuthURL).toBeCalled();
    expect(mockgetRequestForOauth).toBeCalled();
    expect(mockgetCode).toBeCalled();
    expect(token).toBe('google');
    expect(googlebutton).not.toBeInTheDocument();
    expect(store.getState().layout.alarm.text).toBe('로그인 하였습니다.');
  });

  test('카카오 로그인 버튼을 클릭하면 MusicPage로 이동한다.', async () => {
    const user = userEvent.setup();
    const mockAssignAuthURL = jest.spyOn(auth, 'assignAuthURL');
    const mockgetCode = jest.spyOn(auth, 'getCode').mockReturnValue('KaKao');
    const mockgetRequestForOauth = jest
      .spyOn(auth, 'getRequestForOauth')
      .mockReturnValue({ REQUEST_URI: 'auth/kakao', REQUEST_BODY: '123' });

    const { store } = renderWithProvider(
      <MemoryRouter>
        <Routes>
          <Route path={'/'} element={<Form />}></Route>
          <Route path={'/music'} element={<MusicPage />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const KaKaoButton = screen.getByRole('button', { name: '카카오 로그인' });
    await user.click(KaKaoButton);
    const token = store.getState().user.data.access_token;

    expect(mockAssignAuthURL).toBeCalled();
    expect(mockgetRequestForOauth).toBeCalled();
    expect(mockgetCode).toBeCalled();
    expect(token).toBe('Kakao');
    expect(KaKaoButton).not.toBeInTheDocument();
    expect(store.getState().layout.alarm.text).toBe('로그인 하였습니다.');
  });
});

// fetchUserToken 함수 호출후 가짜 전역스토어 값 갱신 => 서버사이드에서 처리해야하니까 가짜 axios return value반환
// 테스트시나리오 => 아래부분은 근데 소셜서버에 요청을 해야하는 부분인데 모킹서버에서 가능할까? 이거는 테스트코드 작성이될지모르겠음
// 1. 구글 버튼 누르면 oauth url 할당
// 2. 페이지 새로고침후에 getCode 호출해서 oauth url에 있는 일부값을 가져옴
// 3. logininfo와 getCode를 기반으로 fetchUserToken을 하여 소셜로그인 서버에 필요한 정보에대해 전달해주고 소셜로그인서버는 토큰을 사용자에게 준다.
// 4. musicpage로 이동
