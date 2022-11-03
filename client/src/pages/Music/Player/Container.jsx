import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PlayerFooter from './Footer';
import PlayerItem from './Item';
const Root = styled.div`
  width: 30%;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 7px;

  @media screen and (max-width: 1000px) {
    margin: 0px;
    width: 100%;
  }
`;
const ScrollBox = styled.div`
  height: 25vh;
  overflow-y: scroll;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: purple;
    border-radius: 7px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const PlayerHeader = styled.div`
  height: 50px;
`;
const PlayerTitle = styled.h3`
  position: sticky;
  top: 0px;
  font-size: 20px;
  font-weight: 900;
  color: white;
  text-shadow: 2px 2px 2px gray;
`;

// 플레이어 메인
export const Container = () => {
  const playerItems = useSelector((state) => state.music.player.playerItems);

  const items =
    playerItems.length > 0 ? (
      playerItems.map(({ video_title, video_img }, index) => (
        <PlayerItem video_title={video_title} video_img={video_img} key={index} order={++index} />
      ))
    ) : (
      <h3 style={{ color: '#6633cc' }}>재생목록이 비어있습니다.</h3>
    );
  return (
    <Root>
      <PlayerHeader>
        <PlayerTitle>재생 목록</PlayerTitle>
      </PlayerHeader>
      <ScrollBox width={'10px'} height={'5%'} color={'#6633cc'}>
        {items}
      </ScrollBox>

      <PlayerFooter />
    </Root>
  );
};
export default Container;
