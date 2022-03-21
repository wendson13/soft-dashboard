import { Outlet } from 'react-router-dom';
import styled from 'styled-components';;

export function PageLayout () {
  return (
    <Container>
      
      <Outlet />
    
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;