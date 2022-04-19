import { Outlet } from 'react-router-dom';
import styled from 'styled-components'; 
import { Navbar } from '../Navbar';

export function OnlyNavbar () {
  return (
    <Container>
      <Navbar />

      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;
