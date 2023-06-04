import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Link from '../../components/Link';
import { Row, Label, RowImage } from '../../components/Auth';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import myLinkLogoClaro from '../../assets/img/claro.png';
import Button from '../../components/Form/Button';

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
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout>
      <RowImage>
        <img src={myLinkLogoClaro} alt="Event Logo" />
      </RowImage>
      <Row>
        <Label></Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" disabled={loadingSignIn}>ENTRAR</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}