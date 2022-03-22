import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Dashboard () {
  return (
    <Container>
      <Header />
      <main>
        <h1>Dashboard</h1>
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  main {
    min-height: 100vh;
  }
`;
