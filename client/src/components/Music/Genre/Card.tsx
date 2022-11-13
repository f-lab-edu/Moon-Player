import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/Image';
import { useMusicSelector } from 'hooks/useMusicSelector';
export const Card = ({ genre_img, genre_id }) => {
  const dispatch = useDispatch();
  const [, playListSelector] = useMusicSelector();

  const isInGenre = playListSelector.musicList.id === genre_id ? true : false;
  const handleCard = ({ target }) => dispatch(fetchmusicList(target.id));

  return (
    <CardImage
      onClick={handleCard}
      src={genre_img}
      width="200px"
      height="120px"
      id={genre_id}
      key={genre_id}
      disabled={isInGenre}
    />
  );
};

const CardImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  box-shadow: ${({ theme }) => theme.boxShadows.card};
  opacity: ${(props) => (!props.disabled ? '0.2' : '1')};
  margin-left: 15px;
  transition-duration: 0.4s;
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  max-width: 100%;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    width: 250px;
    height: 150px;
  }
`;

export default Card;