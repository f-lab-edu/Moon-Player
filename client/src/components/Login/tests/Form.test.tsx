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
});
