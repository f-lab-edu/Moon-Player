import { render, screen } from '../../../test-utils/index.js';
import Alarm from '../Alarm';

describe('Alarm 컴포넌트 테스트', () => {
  test('Alarm 컴포넌트가 문서에 잘 나온다', () => {
    render(<Alarm data-testid="alarm" text="hello" />);
    const alarm = screen.getByTestId('alarm');
    expect(alarm).toBeInTheDocument();
  });
});
