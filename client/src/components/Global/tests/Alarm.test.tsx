import { render, screen } from '../../../test-utils/index.js';

import Alarm from '../Alarm';
import userEvent from '@testing-library/user-event';
describe('Alarm 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const onClose = jest.fn();
  // 이 테스트도 잘못됨 => 렌더링 검증이 잘 이뤄지지않은 테스트인거같음 (전역스토어 값을 감지못한다 마찬가지로..)
  test('확인 버튼을 누르면 Alarm 창이 닫힌다.', async () => {
    render(<Alarm text="hello" onClose={onClose}></Alarm>);
    const button = screen.getByRole('button', { name: '확인' });

    await user.click(button);
    expect(onClose).toBeCalled();
  });
});
describe('Alarm 컴포넌트 하위요소 테스트', () => {
  test('Alarm 컴포넌트가 렌더링 된다', () => {
    const onClose = jest.fn();
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const alarm = screen.getByTestId('overlay');
    expect(alarm).toBeInTheDocument();
  });

  test('올바른 text가 존재한다.', () => {
    const onClose = jest.fn();
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const text = screen.getByText('안녕하세요');
    expect(text).toBeInTheDocument();
  });
  test('확인 버튼이 존재한다', () => {
    const onClose = jest.fn();
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const button = screen.getByRole('button', { name: '확인' });
    expect(button).toBeInTheDocument();
  });
  test('text가 가운데로 정렬되어있다', () => {
    const onClose = jest.fn();
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const alarmtext = screen.getByTestId('alarmText');
    expect(alarmtext).toHaveStyleRule('text-align', 'center');
  });
});

// 아래께 올바른 테스트인데 전역스토어 값 감지못함

//  위에 같이 수정하니까 alarm view모델만 남고 오히려 코드도 깔끔해짐 ? 리팩토링 덤으로
// 이렇게 하면 돔에서 이상하게 감지못해서 함수 호출유무로 판단해야되는거같음..
// test('확인 버튼을 누르면 Alarm 창이 닫힌다.', async () => {
//   render(<Alarm text="hello" onClose={onClose}></Alarm>);

//   const alarm = screen.getByTestId('overlay');
//   const button = screen.getByRole('button', { name: '확인' });
//   await user.click(button);
//   expect(alarm).not.toBeInTheDocument();
// });
