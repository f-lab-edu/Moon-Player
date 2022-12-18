import { render, screen } from '@testing-library/react';
import Button from '../Button';
import 'jest-styled-components';

test('버튼의 색깔은 하얀색이어야한다.', () => {
  render(<Button color="white" />);
  const button = screen.getByRole('button');
  expect(button).toHaveStyleRule('background-color', 'white');
});
