import styled from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
  }

  button {
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray1};
    border: 0;
    box-shadow: .1rem .1rem .5rem ${({ theme }) => theme.colors.gray6};
    background: ${({ theme }) => theme.gradients.dark};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PaymentInfo = styled.div`
  min-width: 20rem;
  display: flex;
  align-items: center;
  gap: .5rem;

  select {
    padding: .5rem;
    border: .1rem solid ${({ theme }) => theme.colors.gray6};
    border-radius: .5rem;
    cursor: pointer;
    background: transparent;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    margin-left: auto;
    background: transparent;
  }
`;

type CardNumberType = {
  invalid: boolean;
}

export const CardNumber = styled.div<CardNumberType>`
  position: relative;

  input {
    padding: .5rem;
    border: .1rem solid ${({ theme, invalid }) => invalid ? theme.colors.danger : theme.colors.gray6};
    border-radius: .5rem;

    &::placeholder {
      color: ${({ theme, invalid }) => invalid && theme.colors.danger};
    }
  }

  span {
    position: absolute;
    bottom: -1.4rem;
    left: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const FormAddCreditCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
  }

  label {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;

    > label > input {
      padding: 1rem;
      border-radius: .5rem;
      border: .1rem solid ${({ theme }) => theme.colors.gray6};
      color: ${({ theme }) => theme.colors.dark};
      
    }

    select {
      font-size: 1.1rem;
      padding: 1rem;
      border-radius: .5rem;
      border: 0;
      cursor: pointer;
    }

    > label > div {
      display: flex;
      align-items: center;
      gap: .5rem;

      > input {
        width: 6rem;
        gap: 1rem;
        padding: 1rem;
        border-radius: .5rem;
        border: .1rem solid ${({ theme }) => theme.colors.gray6};
        color: ${({ theme }) => theme.colors.dark};
      }
    }

    label:last-child > input{
      width: 6rem;
    }
  }

  > label > input {
    padding: 1rem;
    border-radius: .5rem;
    border: .1rem solid ${({ theme }) => theme.colors.gray6};
    color: ${({ theme }) => theme.colors.dark};
  }

  > div:last-child {
    justify-content: flex-end;
    align-items: center;

    button:first-child {
      font-weight: 500;
      padding: 1rem;
      border: 0;
      color: ${({ theme }) => theme.colors.dark};
      border-radius: .5rem;
      background: transparent;
    }

    button:last-child {
      font-weight: 500;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.gray1};
      border: 0;
      border-radius: .5rem;
      background: ${({ theme }) => theme.gradients.dark};
    }
  }
`;

export const ModalDateAndSecurity = styled.div`
  justify-content: space-evenly;

  label:last-child > input{
    width: 5rem;
  }
`;