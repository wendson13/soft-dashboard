import { useEffect, useState } from 'react';
import { BsFillFileTextFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import styled, { useTheme } from 'styled-components';

type NavigationProps = {
  userInfo: {
    imageUrl: string;
    name: string;
    function: string;
  }
}

export function Navigation ({ userInfo } : NavigationProps) {

  const { colors } = useTheme();
  const [currentNav, setCurrentNav] = useState(0);

  return (
    <Container>
      <ProfileBox>
        <UserInfo>
          <img src={userInfo.imageUrl} alt={userInfo.name} />
          <div>
            <strong>{userInfo.name}</strong>
            <p>{userInfo.function}</p>
          </div>
        </UserInfo>

        <Nav>
          <button
            className={currentNav === 0 ? 'active' : ''}
            onClick={() => setCurrentNav(0)}
          >
            <IoCopy size={20} color={colors.gray8} />
            Overview
          </button>
          <button
            className={currentNav === 1 ? 'active' : ''}
            onClick={() => setCurrentNav(1)}
          >
            <BsFillFileTextFill size={20} color={colors.gray8} />
            Teams
          </button>
          <button
            className={currentNav === 2 ? 'active' : ''}
            onClick={() => setCurrentNav(2)}
          >
            <FaTools size={20} color={colors.gray8} />
            Projects
          </button>
        </Nav>
      </ProfileBox>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2rem;
  border-radius: 0 0 1rem 1rem;
  margin-top: -2rem;

  &::after {
    content: '';
    width: 100%;
    height: 18rem;
    background: url('./profile-bg.png') no-repeat center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.75rem;
  border-radius: .5rem;
  box-shadow: .1rem .1rem 1rem ${({theme}) => theme.colors.gray7};
  background: ${({theme}) => theme.rgba.gray1};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    border-radius: .5rem;
  }

  strong {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.dark};
    line-height: 2rem;
  }

  p {
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray7};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-right: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-weight: 700;
    border: 0;
    padding: .5rem;
    border-radius: .5rem;
    color: ${({theme}) => theme.colors.gray8};
    background: transparent;
    
    &.active {
      box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
      background: ${({theme}) => theme.colors.gray1};
    }
  }
`;