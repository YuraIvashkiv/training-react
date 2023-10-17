import { Toaster } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from './Nav';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return (
    <Container>
      <Nav />
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
