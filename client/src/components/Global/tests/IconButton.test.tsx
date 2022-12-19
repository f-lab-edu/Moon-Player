import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import IconButton from '../IconButton';
// 이거 스케일 감지안됨 css속성도 변경안되는데 어케해야될지..
// test('버튼에 hover 했을때 커진다.', async () => {
//   const user = userEvent.setup();
//   const onClick = jest.fn();
//   render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="2x" />);
//   const button = screen.getByRole('button');

//   await user.hover(button);

//   expect(button).toHaveStyleRule('transform', 'scale(1.4)');
// });
describe('IconButton 버튼 속성 검증', () => {
  test('버튼 active가 true이면 pointer 감지가 안되고 opacity는 0.5가 된다.', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={true} onClick={onClick} icon="plus" size="2x" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyleRule('pointer-events', 'none');
    expect(button).toHaveStyleRule('opacity', '0.5');
  });
  test('버튼 active가 false 이면 pointer 감지가 되고 opacity는 1이 된다.', () => {
    const onClick = jest.fn();
    render(<IconButton color="white" active={false} onClick={onClick} icon="plus" size="2x" />);
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
