import { render, screen, waitFor } from '../../../test-utils/index.js';
import { Form } from '../Form';
import userEvent from '@testing-library/user-event';
import { mockWindowLocation } from '../../../mocks/windowLocation';

mockWindowLocation();

describe('Form 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  test('구글 로그인 버튼을 누르면 Oauth url이 할당이 된다.', async () => {
    render(<Form />);

    const googlebutton = screen.getByRole('button', { name: 'Google 로그인' });
    await user.click(googlebutton);
    expect(window.location.assign).toBeCalled();
  });
  test('카카오 로그인 버튼을 누르면 Oauth url이 할당이 된다.', async () => {
    render(<Form />);

    const kakaoButton = screen.getByRole('button', { name: '카카오 로그인' });
    await user.click(kakaoButton);
    expect(window.location.assign).toBeCalled();
  });
});
//  원래 페이지는 oauth url 할당후 다른페이지로 리다이렉션되는데 가상돔에서는 리다이렉션이 안됨.. 이거 잘모르겠다
// 1. oauth url 할당후

// 아래 부분은 API 모킹 해야할듯
// 2. 토큰 날라오면
// 3. 토큰이 정상적이면 musicpage로 이동함 (토큰은 그냥 )
