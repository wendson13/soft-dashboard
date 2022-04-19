import styled from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.dark};
  }

  svg {
    cursor: pointer;
  }
`;

export const About = styled.div`
  textarea {
    width: 100%;
    padding: .5rem;
    border-radius: .5rem;
    border: .1rem solid gray;
    resize: none;
  }

  p {
    color: ${({theme}) => theme.colors.gray8};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
  margin-top: 1rem;
  list-style: none;
  border-top: .25rem solid ${({theme}) => theme.colors.gray4};

  li {
    display: flex;
    gap: 1rem;
    color: ${({theme}) => theme.colors.gray8};

    span {
      font-weight: 700;
      color: ${({theme}) => theme.colors.dark};
    }

    div {
      display: flex;
      gap: .5rem;

      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: .5rem;
      }
    }
  }
`;

export const SaveButton = styled.button`
  font-weight: 500;
  display: flex;
  align-self: flex-end;
  border: 0;
  padding: .5rem;
  border-radius: .5rem;
  color: ${({theme}) => theme.colors.gray1};
  background: ${({theme}) => theme.gradients.dark};
`;