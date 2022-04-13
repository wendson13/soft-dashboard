import styled from 'styled-components';

export const Container = styled.div`
  min-width: 12rem;
  max-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  gap: .5rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};

  > strong {
    width: 100%;
    font-size: 1.75rem;
    font-weight: 700;
    padding: 1rem 0;
    border-top: .25rem solid ${({theme}) => theme.colors.gray4};
    color: ${({theme}) => theme.colors.dark};
  }
`;

export const IconBox = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({theme}) => theme.gradients.primary};
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.dark};
  }
  
  p {
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray7};
  }
`;