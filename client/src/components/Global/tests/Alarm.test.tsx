import Alarm from '../Alarm';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { renderWithProvider, screen, renderHook, waitFor } from '../../../test-utils/index';
import { useAlarm } from 'hooks/useAlarm';
function getWrapper(store) {
  // eslint-disable-next-line react/display-name
  return ({ children }) => <Provider store={store}>{children}</Provider>;
}

describe('Alarm 컴포넌트 기능 테스트', () => {
  test('handleOpen이 호출되면 전달된 텍스트에 맞는 Alarm컴포넌트가 보여진다. .', async () => {
    const { store } = renderWithProvider(<Alarm></Alarm>);
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => useAlarm(), {
      wrapper,
    });
    // alarm 호출
    await waitFor(() => result.current.handleOpen('안녕하세요'));
    expect(result.current.text).toEqual('안녕하세요');
    const alarm = await screen.findByTestId('overlay');
    expect(alarm).toBeInTheDocument();
  });

  test('Alarm 컴포넌트의 확인 버튼을 누르면 Alarm 컴포넌트가 사라진다.', async () => {
    const user = userEvent.setup();
    const { store } = renderWithProvider(<Alarm></Alarm>);
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => useAlarm(), {
      wrapper,
    });
    await waitFor(() => result.current.handleOpen('안녕하세요'));
    const button = screen.getByRole('button', { name: '확인' });
    const alarm = await screen.findByTestId('overlay');
    await user.click(button);
    expect(alarm).not.toBeInTheDocument();
  });
});
