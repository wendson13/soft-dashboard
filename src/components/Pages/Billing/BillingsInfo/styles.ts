import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.dark};
`;

export const BillingInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background: ${({theme}) => theme.colors.gray3};
`;

export const TitleBox = styled.div` 
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.dark};
  }

  input {
    padding: .5rem;
    border: .1rem solid ${({theme}) => theme.colors.gray6};
    border-radius: .5rem;
  }

  button {
    display: flex;
    align-items: flex-end;
    gap: .5rem;
    font-weight: 700;
    border: 0;
    color: ${({theme}) => theme.colors.dark};
    background: transparent;
  }

  strong + button {
    color: ${({theme}) => theme.colors.danger};
    margin-left: auto;
  }
`;

export const BillingContent = styled.div`
  width: 100%;
  display: flex;
  gap: .5rem;
  flex-direction: column;
  align-items: flex-start;

  p {
    display: flex;
    gap: 1rem;
    color: ${({theme}) => theme.colors.gray7};

    input {
      width: 100%;
      padding: .5rem;
      border: .1rem solid ${({theme}) => theme.colors.gray6};
      border-radius: .5rem;
    }
    
    span {
      font-weight: 500;
      color: ${({theme}) => theme.colors.dark};
    }
  }
`;