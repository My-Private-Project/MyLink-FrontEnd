import { useNavigate, useParams } from "react-router-dom";
import { Label, Line } from "../../components/Creator";
import CreatorLayout from "../../layouts/Creator";

import styled from "styled-components";
import { StyleCard } from "../../components/Creator/StyleCard";
import { useState } from "react";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";
import Button from "../../components/Form/Button";

import bobesponja from "../../assets/img/Bobesponja.jpeg"

export default function Creator() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [modificate, setModificate] = useState(false);
  const token = useToken();

  console.log(name);

  function backHome() {
    navigate("/home");
  }

  async function newCard() {
    const name = prompt("Qual o nome do seu card?");
    const link = prompt("Para onde seu card leva?");

    try {
      //await create({ name, link }, token);
      setModificate(true);
      toast("Criação do card realizada com sucesso!");
    } catch (err) {
      toast("Não foi possível criar o card!");
    }
  }

  async function updateCard(id) {
    const name = prompt("Qual o novo nome do seu card?");
    const link = prompt("Para onde seu novo card vai levar?");

    try {
      //await update({ id, name, link }, token);
      setModificate(true);
      toast("Você alterou o card com sucesso!");
    } catch (err) {
      console.log(err);
      toast("Não foi possível alterar o card!");
    }
  }

  async function deleteCard(id) {
    try {
      //await remove(id, token);
      setModificate(true);
      toast("Você deletou o card com sucesso!");
    } catch (err) {
      console.log(err);
      toast("Não foi possível deletar o card!");
    }
  }

  return (
    <CreatorLayout background={"#000000"}>
      <Profile>
        <img src={bobesponja} alt="Imagem de usuário"/>
        <label onClick={backHome}>DevPhil</label>
        <Button color="primary" onClick={newCard}>Criar card</Button>
      </Profile>
      <Line />
      <CardList>
        {!cards ? (
          <label>Erro ao trazer os cards. Desculpe... </label>
        ) : cards.length === 0 ? (
          <label>Você não possui cards ainda... </label>
        ) : (
          cards.map((c) => (
            <StyleCard
              name={c.name}
              key={c.id}
              card={c}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          ))
        )}
      </CardList>
    </CreatorLayout>
  );
}

const CardList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  label {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
  }
`;

const Profile = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 200px;
        height: 200px;
        border-radius: 100px;
        margin: 20px;
    }

    label {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin-top: 20px;
  }
`;
