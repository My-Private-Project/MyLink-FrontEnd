import styled from 'styled-components';

import HomeLayout from '../../layouts/Home';
import { FaSignOutAlt } from 'react-icons/fa';

import myLinkLogoClaro from '../../assets/img/claro.png';
import { 
  Label, 
  Line,
  Top,
  Menu,
  Right,
  Left
} from '../../components/Home';
import Button from '../../components/Form/Button';

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
          <FaSignOutAlt color='#4080F5' size={'sm'} onClick={active} cursor={"pointer"}/>
        </Right>
      </Menu>
      <Container>
        <Top>
          <Label>LINKS</Label>
          <Line/>
          <Button color="primary" onClick={active}>Criar link</Button>
        </Top>
      </Container>
    </HomeLayout>
  );
}

const Container = styled.div`
  padding: 10px 30px;
  margin-top: 100px;
  height: 100%;
  width: 1040px;
  overflow-y: auto;
  border-radius: 10px;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;