import { render, screen } from '@testing-library/react';
import Button from '../../components/Global/Button';

// Global컴포넌트는 styledComponent여서 스타일 검증밖에 없음
//  컴포넌트 props 테스트?

describe('버튼 기능 검증 테스트', () => {
  test('버튼이 렌더링된다', () => {
    render(<Button color="white" fontSize="16px" fontColor="black" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('버튼은 props에 맞게 정의된다..', () => {
    render(<Button color="white" fontSize="16px" fontColor="black" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'white',
      fontSize: '16px',
      color: 'black',
    });
  });
});
