import styled from 'styled-components';

export const BoxShadow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};
`;