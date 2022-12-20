import { render, screen } from '../../../test-utils/index.js';

import Alarm from '../Alarm';
import userEvent from '@testing-library/user-event';
describe('Alarm 컴포넌트 테스트', () => {
  const user = userEvent.setup();
  const onClose = jest.fn();

  test('확인 버튼을 누르면 Alarm 창이 닫힌다.', async () => {
    render(<Alarm text="hello" onClose={onClose}></Alarm>);
    const button = screen.getByRole('button', { name: '확인' });
    await user.click(button);
    expect(onClose).toBeCalled();
  });
});

//  위에 같이 수정하니까 alarm view모델만 남고 오히려 코드도 깔끔해짐 ? 리팩토링 덤으로
// 이렇게 하면 돔에서 이상하게 감지못해서 함수 호출유무로 판단해야되는거같음..
// test('확인 버튼을 누르면 Alarm 창이 닫힌다.', async () => {
//   render(<Alarm text="hello" onClose={onClose}></Alarm>);

//   const alarm = screen.getByTestId('overlay');
//   const button = screen.getByRole('button', { name: '확인' });
//   await user.click(button);
//   expect(alarm).not.toBeInTheDocument();
// });
