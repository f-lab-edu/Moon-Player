import ScrollBox from 'components/Global/style/ScrollBox';
import styled from 'styled-components';
import MainHeader from '../../Header/MainHeader/MainHeader';
import DataListItem from '../DataListItem/DataListItem';

const datas = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요', id: 2 },
  { title: '안녕sdfsdf', id: 3 },
  { title: '안녕sdfsdf', id: 4 },
  { title: '안녕sdfsdf', id: 5 },
  { title: '안녕sdfsdf', id: 6 },
  { title: '안녕sdfsdf', id: 7 },
];

// 서버로부터 데이터 페칭해서 렌더링
export const DataList = () => {
  const userDataList = datas.map((data) => <DataListItem title={data.title} key={data.id} id={data.id} />);
  return (
    <>
      <MainHeader title="나만의 플레이리스트 목록" />
      <DataListLayout>{userDataList}</DataListLayout>
    </>
  );
};
const DataListLayout = styled(ScrollBox)`
  height: 42vh;
  margin-top: 20px;
  h3 {
    font-size: 20px;
    margin-right: 10px;
  }
  div {
    font-size: 16px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;

export default DataList;
