import { Outlet } from 'react-router-dom';
import styled from 'styled-components';import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
;

export function PageLayout () {
  return (
    <Container>
      <Navbar />

      <Content>
        <Header/>
        <Outlet />
        <Footer />
      </Content>
    
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;