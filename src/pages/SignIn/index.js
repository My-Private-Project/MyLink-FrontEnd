import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { SignInLayout } from '../../layouts/User';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import Link from '../../components/Link';
import { Row, RowImage } from '../../components/User';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import myLinkLogoClaro from '../../assets/img/claro.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <SignInLayout background={`#000000`}>
      <RowImage>
        <img src={myLinkLogoClaro} alt="Logo MyLink" />
      </RowImage>
      <Row>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" disabled={loadingSignIn}>ENTRAR</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up">Não possui login? Inscreva-se</Link>
      </Row>
    </SignInLayout>
  );
}