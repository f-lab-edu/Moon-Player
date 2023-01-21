import styled from 'styled-components';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Global/style/Image';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';
import { GenreDataType } from 'types/app/genre';
type ItemProps = Pick<GenreDataType, 'image_url' | 'genre_id'>;

export const Item = ({ image_url, genre_id }: ItemProps) => {
  const dispatch = useAppDispatch();
  const isInGenre = useAppSelector((state) => state.music.playList.genre.genre_id) === genre_id ? true : false;

  const handleCardImage = () => {
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${genre_id}`));
  };

  return <CardImage onClick={handleCardImage} img={image_url} key={genre_id} disabled={isInGenre} />;
};

interface CardImageProps {
  disabled: boolean;
}
const CardImage = styled(Image)<CardImageProps>`
  border-radius: 7px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  opacity: ${(props) => (!props.disabled ? '0.54' : '1')};
  transition-duration: 0.4s;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  cursor: pointer;
`;

export default Item;
