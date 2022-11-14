import styled from 'styled-components';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/Image';
import { useMusicSelector } from 'hooks/useMusicSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
type CardProps = {
  genre_img: string;
  genre_id: string;
};
export const Card = ({ genre_img, genre_id }: CardProps) => {
  const dispatch = useAppDispatch();
  const [, playListSelector] = useMusicSelector();

  const isInGenre: boolean = playListSelector.musicList.id === genre_id ? true : false;
  const handleCard = (event: React.MouseEvent<HTMLImageElement>) => dispatch(fetchmusicList(event.currentTarget.id));

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

type CardImageProps = {
  theme: any;
  disabled: boolean;
};

const CardImage = styled(Image)<CardImageProps>`
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
