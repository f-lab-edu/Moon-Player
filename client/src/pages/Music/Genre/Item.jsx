import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/Image';
import { useMusicSelector } from 'hooks/useMusicSelector';

const CardImage = styled(Image)`
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  box-shadow: ${({ theme }) => theme.boxShadows.card};
  opacity: ${(props) => (!props.disabled ? '0.2' : '1')};
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
  @media screen and (max-width: 630px) {
    width: 400px;
    height: 200px;
  }
`;

export const Item = ({ genre_img, genre_id }) => {
  const dispatch = useDispatch();
  const [, playListSelector] = useMusicSelector();

  const isInGenre = playListSelector.musicList.id === genre_id ? true : false;
  const handleCard = ({ target }) => dispatch(fetchmusicList(target.id));

  return (
    <>
      <CardImage
        onClick={handleCard}
        src={genre_img}
        width={'200px'}
        height={'130px'}
        id={genre_id}
        key={genre_id}
        disabled={isInGenre}
      />
    </>
  );
};
export default Item;
