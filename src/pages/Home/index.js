import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import DashboardLayout from '../../layouts/Dashboard';
import { Title } from '../../components/Auth';

export default function Home() {

  return (
    <DashboardLayout background={'#000000'}>
      <Title>Já já estará disponível ;)</Title>
      <Container>
        <Outlet />
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
