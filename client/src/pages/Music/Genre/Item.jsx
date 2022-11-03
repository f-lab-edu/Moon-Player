import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/Image';

const CardImage = styled(Image)`
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  opacity: ${(props) => (!props.disabled ? '0.6' : '1')};
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

export const Item = ({ img, id }) => {
  const dispatch = useDispatch();

  const isInGenre = useSelector((state) => state.music.playList.musicList.id === id);

  const handleCard = ({ target }) => {
    const genre_id = target.id;
    dispatch(fetchmusicList(genre_id));
  };

  return (
    <>
      <CardImage
        onClick={handleCard}
        src={img}
        width={'200px'}
        height={'130px'}
        id={id}
        key={id}
        disabled={isInGenre}
      />
    </>
  );
};
export default Item;
