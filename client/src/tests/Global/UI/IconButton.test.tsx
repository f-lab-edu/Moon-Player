import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import IconButton from '../../../components/Global/UI/IconButton';

describe('IconButton 기능 테스트', () => {
  const user = userEvent.setup();
  const onClick = jest.fn();

  test('버튼에 hover를하면 커진다.', async () => {
    const onClick = jest.fn();
    render(<IconButton color="red" active={false} onClick={onClick} icon="plus" size="2x" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyleRule('transform', 'scale(1.3)', { modifier: ':hover' });
  });
  test('버튼을 누르면 onClick이 실행된다.', async () => {
    render(<IconButton color="white" active={false} onClick={onClick} icon="pause" size="1x" />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClick).toBeCalled();
  });
});

describe('IconButton 스타일 속성 검증', () => {
  test('버튼 active가 true이면 pointer 감지가 안되고 opacity는 0.5가 된다.', () => {
    const onClick = jest.fn();
    render(<IconButton color="red" active={true} onClick={onClick} icon="plus" size="2x" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyleRule('pointer-events', 'none');
    expect(button).toHaveStyleRule('opacity', '0.5');
  });
  test('버튼 active가 false 이면 pointer 감지가 되고 opacity는 1이 된다.', () => {
    const onClick = jest.fn();
    render(<IconButton color="red" active={false} onClick={onClick} icon="plus" size="2x" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyleRule('pointer-events', 'auto');
    expect(button).toHaveStyleRule('opacity', '1');
  });
});

describe('버튼 사이즈 검증', () => {
  // svg element 조회방법
  test('버튼사이즈는 x', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="1x" />);
    const buttonSize = screen.getByRole('img', { hidden: true });
    expect(buttonSize).toHaveStyle('font-size: 1em');
  });
  test('버튼사이즈는 2x', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="2x" />);
    const buttonSize = screen.getByRole('img', { hidden: true });
    expect(buttonSize).toHaveStyle('font-size: 2em');
  });
  test('버튼사이즈는 3x', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="3x" />);
    const buttonSize = screen.getByRole('img', { hidden: true });
    expect(buttonSize).toHaveStyle('font-size: 3em');
  });
});

describe('올바른 아이콘인지 검증', () => {
  test('plus 버튼인지 확인한다', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="1x" />);
    const plusbutton = screen.getByRole('img', { hidden: true });
    expect(plusbutton).toHaveAttribute('data-icon', 'circle-plus');
  });
  test('play 버튼인지 확인한다', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="play" size="1x" />);
    const playbutton = screen.getByRole('img', { hidden: true });
    expect(playbutton).toHaveAttribute('data-icon', 'circle-play');
  });
  test('pause 버튼인지 확인한다', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="pause" size="1x" />);
    const pausebutton = screen.getByRole('img', { hidden: true });
    expect(pausebutton).toHaveAttribute('data-icon', 'circle-pause');
  });
});
