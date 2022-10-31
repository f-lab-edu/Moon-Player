import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import Image from 'components/Common/Image';

const CardImage = styled(Image)`
  width: 190px;
  height: 120px;
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

  // PlayList가 변경이 되므로 PlayList데이터가지고 isInGerne로 만듬
  const isInGenre = useSelector((state) => state.musicReducer.musicPlayList.musicList.id === id);
  // 다른 genre Card 를 누를떄마다 musicList state값 변경
  // genre Card를 누르면 현재 id 아이템을 제외하고 전부다 opactiy 작게 주기

  const handleCard = ({ target }) => {
    const genre_id = target.id;
    dispatch(fetchmusicList(genre_id));
  };

  return (
    <>
      <CardImage onClick={handleCard} img={img} id={id} key={id} disabled={isInGenre} />
    </>
  );
};
