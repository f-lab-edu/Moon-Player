import { render, screen } from '@testing-library/react';
import Button from '../Button';

// Global컴포넌트는 styledComponent여서 스타일 검증밖에 없음
//  컴포넌트 props 테스트?

describe('버튼 속성 검증 테스트', () => {
  test('버튼은 html문서에 나타난다.', () => {
    render(<Button color="white" fontSize="16px" fontColor="black" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('버튼의 색깔은 하얀색이고 폰트사이즈는 16px 폰트컬러는 검정색.', () => {
    render(<Button color="white" fontSize="16px" fontColor="black" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'white',
      fontSize: '16px',
      color: 'black',
    });
  });
});
