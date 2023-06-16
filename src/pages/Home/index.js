import styled from 'styled-components';

import HomeLayout from '../../layouts/Home';
import { FaSignOutAlt } from 'react-icons/fa';

import { useState } from 'react';
import { useEffect } from 'react';

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
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { create, find } from '../../services/linkApi';
import { StyleLink } from '../../components/Home/StyleLink';


export default function Home() {
  const [links, setLinks] = useState([]);
  const token = useToken();

  function active(){
    return alert("Estou ativo!");
  };

  useEffect(() => {
    find(token)
      .then((res) => {
        console.log(res);
        setLinks(res);
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 404) setLinks(false);
      });
  }, []);

  async function newLink(){
    const name = prompt("Qual o nome do seu link?");

    try {
      await create({name}, token);
      toast('Criação do link realizado com sucesso!');
    } catch (err) {
      toast('Não foi possível criar o link!');
    }
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
          <Button color="primary" onClick={newLink}>Criar link</Button>
        </Top>
        <LinkList>
          { links ?
          links.map((l) => <StyleLink name={l.name} key={l.id} active={active}/>)
          :
          <Label>Você não possui links ainda... </Label>
          }
        </LinkList>
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

const LinkList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 0;
`;