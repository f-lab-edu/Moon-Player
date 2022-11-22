import styled from 'styled-components';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/UI/Image';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { Genre } from 'types/store';

type ItemProps = Pick<Genre, 'genre_img' | 'genre_id'>;

export const Item = ({ genre_img, genre_id }: ItemProps) => {
  const dispatch = useAppDispatch();
  const playListSelector = useAppSelector((state) => state.music.playList);
  const isInGenre: boolean = playListSelector.musicList.id === genre_id ? true : false;
  const handleCard = () => dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${genre_id}`));

  return <CardImage onClick={handleCard} img={genre_img} key={genre_id} disabled={isInGenre} />;
};

interface CardImageProps {
  disabled: boolean;
}

const CardImage = styled(Image)<CardImageProps>`
  width: 200px;
  height: 150px;
  border-radius: 7px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
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

export default Item;
