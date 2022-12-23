import { renderWithProvider, screen } from '../../../test-utils/index';
import { Form } from '../Form';

import userEvent from '@testing-library/user-event';
import { mockAssignUrl } from '../../../mocksFunction/assignurl.js';

describe('Form 컴포넌트 기능 테스트', () => {
  mockAssignUrl();
  const user = userEvent.setup();
  test('구글 로그인 버튼을 누르면 Oauth url이 할당이 된다.', async () => {
    renderWithProvider(<Form />);

    const googlebutton = screen.getByRole('button', { name: 'Google 로그인' });
    await user.click(googlebutton);
    expect(window.location.assign).toBeCalled();
  });
  test('카카오 로그인 버튼을 누르면 Oauth url이 할당이 된다.', async () => {
    renderWithProvider(<Form />);

    const kakaoButton = screen.getByRole('button', { name: '카카오 로그인' });
    await user.click(kakaoButton);
    expect(window.location.assign).toBeCalled();
  });
});
// 테스트시나리오 => 아래부분은 근데 소셜서버에 요청을 해야하는 부분인데 모킹서버에서 가능할까?
// 1. 구글 버튼 누르면 oauth url 할당
// 2. 페이지 새로고침후에 getCode 호출해서 oauth url에 있는 일부값을 가져옴
// 3. logininfo와 getCode를 기반으로 fetchUserToken을 하여 소셜로그인 서버에 필요한 정보에대해 전달해주고 소셜로그인서버는 토큰을 사용자에게 준다.
// 4. musicpage로 이동
