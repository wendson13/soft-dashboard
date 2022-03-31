import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 1rem;
`;

export const WidgetBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Info = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const Documentation = styled.div`
  width: 100%;
  height: 16rem;
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
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({theme}) => theme.colors.gray8};
    }
    h2 {
      font-size: 1.75rem;
      color: ${({theme}) => theme.colors.dark};
    }
    button {
      display: flex;
      align-items: center;
      gap: .25rem;
      font-size: 1.3rem;
      font-weight: 500;
      border: 0;
      margin-top: auto;
      color: ${({theme}) => theme.colors.gray8};
      background: transparent;
      animation: .1s buttonHoverOut linear forwards;

      &:hover {
        animation: .3s buttonHoverIn linear forwards;
      }
    }
  }

  @keyframes buttonHoverIn {
    50% {
      gap: 1rem;
    }

    100% {
      gap: .75rem;
    }
  }

  @keyframes buttonHoverOut {
    from {
      gap: .75rem;
    }

    to {
      gap: .25rem;
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
  width: 100%;
  height: 16rem;
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
    h2 {
      font-size: 1.75rem;
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
      font-size: 1.3rem;
      font-weight: 500;
      border: 0;
      margin-top: auto;
      color: ${({theme}) => theme.colors.gray1};
      background: transparent;
      animation: .1s buttonHoverOut linear forwards;

      &:hover {
        animation: .3s buttonHoverIn linear forwards;
      }
    }
  }
  img {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-fit: cover;
    border-radius: .5rem;
    position: absolute;
    filter: brightness(.5);
  }

  @keyframes buttonHoverIn {
    50% {
      gap: 1rem;
    }

    100% {
      gap: .75rem;
    }
  }

  @keyframes buttonHoverOut {
    from {
      gap: .75rem;
    }

    to {
      gap: .25rem;
    }
  }
`;

export const ChartsBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const TablesBox = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 0;
`;