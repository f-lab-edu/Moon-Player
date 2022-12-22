import Alarm from '../Alarm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
describe('Alarm 컴포넌트 기능 테스트', () => {
  const user = userEvent.setup();
  const onClose = jest.fn();
  test('Alarm 컴포넌트가 올바르게 렌더링 된다', () => {
    const onClose = jest.fn();
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const alarm = screen.getByTestId('overlay');
    expect(alarm).toBeInTheDocument();
  });

  test('확인 버튼을 누르면 onClose가 실행된다.', async () => {
    render(<Alarm text="hello" onClose={onClose}></Alarm>);
    const button = screen.getByRole('button', { name: '확인' });
    await user.click(button);
    expect(onClose).toBeCalled();
  });
});

describe('Alarm 컴포넌트 스타일 검증 테스트', () => {
  const onClose = jest.fn();
  test('올바른 Alarm text가 존재한다.', () => {
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const text = screen.getByText('안녕하세요');
    expect(text).toBeInTheDocument();
  });
  test('Alarm 확인 버튼이 존재한다', () => {
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const button = screen.getByRole('button', { name: '확인' });
    expect(button).toBeInTheDocument();
  });
  test('Alarm text가 가운데로 정렬되어있다', () => {
    render(<Alarm text="안녕하세요" onClose={onClose}></Alarm>);
    const alarmtext = screen.getByTestId('alarmText');
    expect(alarmtext).toHaveStyleRule('text-align', 'center');
  });
});

// 아래께 올바른 테스트인데 전역스토어 값 감지못함

//  위에 같이 수정하니까 alarm view모델만 남고 오히려 코드도 깔끔해짐 ? 리팩토링 덤으로
// 이렇게 하면 돔에서 이상하게 감지못해서 함수 호출유무로 판단해야되는거같음..

// 여기서 테스팅 불가
// test('확인 버튼을 누르면 Alarm 창이 닫힌다.', async () => {
//   const onClose = jest.fn();
//   const user = userEvent.setup();
//   render(<Alarm text="hello" onClose={onClose}></Alarm>);

//   const alarm = screen.getByTestId('overlay');
//   const button = screen.getByRole('button', { name: '확인' });
//   await user.click(button);
//   expect(alarm).not.toBeInTheDocument();
// });
