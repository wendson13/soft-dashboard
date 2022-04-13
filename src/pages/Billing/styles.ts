import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 1rem;
`;

export const PaymentBox = styled.section`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;

  > div:first-child {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div:first-child {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const EarningsCardBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  > div {
    width: 50%;
  }
`;

export const BillingBox = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;
