import styled from 'styled-components';

export const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 2rem auto;
  background: transparent;

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray1};
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      color: ${({theme}) => theme.colors.gray1};
    }
  }
`;

export const BackgroundImage = styled.span`
  width: 100%;
  height: 28rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: url('./sign-up-bg.png') no-repeat center;
  background-size: cover;
`;

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: .1rem .1rem 1rem ${({theme}) => theme.colors.gray9};
    background: ${({theme}) => theme.colors.gray1};

    h1 {
      font-size: 2rem;
      color: ${({theme}) => theme.colors.dark};
    }

    > span {
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.gray8};
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > input {
        padding: 1rem;
        border-radius: .5rem;
        border: .1rem solid ${({theme}) => theme.colors.gray6};
        color: ${({theme}) => theme.colors.dark};
        
        &:focus {
          outline: .1rem solid ${({theme}) => theme.colors.primary};
        }
      }

      > div {
        display: flex; 
        align-items: center;
        gap: .5rem;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 0;
          background: transparent;
          border-radius: .25rem;
        }

        span {
          color: ${({theme}) => theme.colors.dark};

          a {
            font-weight: 700;
          }
        }
      }

      > button {
        font-weight: 700;
        padding: 1rem;
        border-radius: .5rem;
        border: 0;
        color: ${({theme}) => theme.colors.gray1};
        background: ${({theme}) => theme.gradients.dark};
      }

      > span {
        margin: 0 auto;
        color: ${({theme}) => theme.colors.gray7};

        a {
          font-weight: 700;
          color: ${({theme}) => theme.colors.dark};
        }
      }
    }
  }
`;

export const SubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  > button {
      width: 100%;
      font-weight: 500;
      padding: .5rem 1rem;
      border-radius: .5rem;
      border: 0;
      color: ${({theme}) => theme.colors.gray1};
      background: ${({theme}) => theme.gradients.info};
    }
`;