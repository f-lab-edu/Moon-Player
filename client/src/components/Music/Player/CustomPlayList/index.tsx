import ScrollBox from 'components/Global/style/ScrollBox';
import styled from 'styled-components';
import { Item } from './Item/Item';
const datas = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요', id: 2 },
  { title: '안녕sdfsdf', id: 3 },

  { title: '안녕sdfsdf', id: 4 },
  { title: '안녕sdfsdf', id: 5 },
  { title: '안녕sdfsdf', id: 6 },
  { title: '안녕sdfsdf', id: 7 },
];
export const CustomPlayList = () => {
  const items = datas.map((data) => <Item title={data.title} key={data.id} id={data.id} />);
  return <Layout>{items}</Layout>;
};

const Layout = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;

export default CustomPlayList;
