import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

type ActiveLinkProps = {
  children?: ReactNode;
  Icon: IconType;
  isActive: string;
  path: string;
}

export function ActiveLink ({ children, Icon, isActive, path } : ActiveLinkProps) {

  const { colors } = useTheme()

  return (
    <Container to={path} className={isActive === path ? 'active' : ''}>
      <div>
       <Icon size={20} color={isActive === path ? colors.gray1 : colors.dark} />
      </div>

      <span>{children}</span>
    </Container>
  );
}

const Container = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  border: 0;
  font-size: 1.3rem;
  padding: .75rem 1rem;
  color: ${({theme}) => theme.colors.dark};
  background: transparent;
  border: .15rem solid transparent;
  transition: .2s;

  &:hover {
    box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  }

  > div {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    
    box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
    background: ${({theme}) => theme.colors.gray1};
  }
  
  &.active {
    background: ${({theme}) => theme.colors.gray1};
    box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};

    > div {
      background: ${({theme}) => theme.colors.primary};
      box-shadow: none;
    }
  }


  @media screen and (max-width: 1400px) {
    span {
      display: none;
    }
  }
`;
