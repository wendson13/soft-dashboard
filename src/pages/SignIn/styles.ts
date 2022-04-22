import styled from 'styled-components';

export const Header = styled.header`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  margin: 2rem 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 999999rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.rgba.gray1};

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.dark};
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: space-between;

  > img {
    min-height: 100vh;
  }
`;

export const Content = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    label {
      font-weight: 500;
    }

    input {
      width: 100%;
      margin-top: .5rem;
      padding: .5rem 1rem;
      border-radius: .5rem;
      border: .1rem solid ${({theme}) => theme.colors.gray6};
    }

    > span {
      color: ${({theme}) => theme.colors.gray8};

      a {
        font-weight: 700;
        background: ${({theme}) => theme.gradients.info};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h1 {
    font-size: 2.5rem;
    background: ${({theme}) => theme.gradients.info};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > p {
    font-size: 1.25rem;
    color: ${({theme}) => theme.colors.gray7};
    margin-bottom: .5rem;
  }
`;

export const RememberBox = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
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
