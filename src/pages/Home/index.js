import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import HomeLayout from '../../layouts/Home';
import { FaUser, FaLayerGroup, FaPlusCircle } from 'react-icons/fa';

import myLinkLogoClaro from '../../assets/img/claro.png';

export default function Home() {

  function active(){
    return alert("Estou ativo!");
  };

  return (
    <HomeLayout background={'#000000'}>
      <Menu>
        <Left>
          <img src={myLinkLogoClaro} alt="Logo MyLink" />
        </Left>
        <Right>
          <FaUser color='#000' size={'sm'} onClick={active} cursor={"pointer"}/>
          <Space/>
          <FaLayerGroup color='#000' size={'sm'} onClick={active} cursor={"pointer"}/>
        </Right>
      </Menu>
      <Container>
        <Top></Top>
        <Link/>
      </Container>
    </HomeLayout>
  );
}

const Space = styled.div`
  width: 1px;
  height: 50px;
  margin: 0px 15px;
`;
const Container = styled.div`
  padding: 30px;
  margin-top: 100px;
  height: 100px;
  width: 1040px;
  overflow-y: auto;
  background-color: red;
  border-radius: 10px;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 150px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
/*const Center = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: red;
  position: absolute;
  left: 50%;
  top: 0%;
`;*/
const Left = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  img{
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

/*
<Center>
  <FaPlusCircle color='#000' size={'sm'}/>
</Center>
*/