import styled from 'styled-components';

export const WidgetBox = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;

export const Info = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const Documentation = styled.div`
  max-width: 40rem;
  height: 14rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .5rem;
    
    span {
      font-weight: 500;
      color: ${({theme}) => theme.colors.gray8};
    }
    strong {
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.dark};
    }
    button {
      display: flex;
      align-items: center;
      gap: .25rem;
      font-size: 1rem;
      font-weight: 500;
      border: 0;
      margin-top: auto;
      color: ${({theme}) => theme.colors.gray8};
      background: transparent;
    }
  }
`;

export const RocketBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({theme}) => theme.gradients.primary};
`;

export const Working = styled.div`
  max-width: 28rem;
  height: 14rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    z-index: 1;
    strong {
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.gray1};
    }
    p {
      margin-top: 1rem;
      color: ${({theme}) => theme.colors.gray1};
    }
    button {
      display: flex;
      align-items: center;
      gap: .25rem;
      font-size: 1rem;
      font-weight: 500;
      border: 0;
      margin-top: auto;
      color: ${({theme}) => theme.colors.gray1};
      background: transparent;
    }
  }
  img {
    width: calc(100% - 2rem);
    height: 12rem;
    object-fit: cover;
    border-radius: .5rem;
    position: absolute;
    filter: brightness(.5);
  }
`;

export const ChartsBox = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TablesBox = styled.section`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;