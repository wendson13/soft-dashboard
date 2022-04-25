import { AiFillShop } from 'react-icons/ai';
import { FaBuilding, FaCreditCard, FaUserAlt } from 'react-icons/fa';
import { BsFileTextFill } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import { ActiveLink } from './ActiveLink';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

export function Navbar () {

  const { pathname } = useLocation();
  const [pathActive, setPathActive] = useState('/');
  const [shortMode, setShortMode] = useState(false);

  const handleChangeShortMode = () => {
    if(window.innerWidth <= 1400){
      setShortMode(true)
    }

    if(shortMode){
      setShortMode(false);
    }
  }
  
  useEffect(() => {
    setPathActive(pathname);
  }, [pathname])

  useEffect(() => {
    window.addEventListener('resize', handleChangeShortMode)

    return () => window.removeEventListener('resize', handleChangeShortMode)
  }, [])

  return (
    <Container>
    
      <img src="/logo.svg" alt="Soft Dashboard" />

      <nav>
        <img src="/logo-short.svg" alt="Soft Dashboard" />

        <ActiveLink 
          path='/'
          isActive={pathActive}
          Icon={AiFillShop}
        >
          Dashboard
        </ActiveLink>

        <ActiveLink 
          path='/tables'
          isActive={pathActive}
          Icon={FaBuilding}
        >
          Tables
        </ActiveLink>

        <ActiveLink 
          path='/billing'
          isActive={pathActive}
          Icon={FaCreditCard}
        >
          Billing
        </ActiveLink>

        <strong>ACCOUNT PAGES</strong>

        <ActiveLink 
          path='/profile'
          isActive={pathActive}
          Icon={FaUserAlt}
        >
          Profile
        </ActiveLink>

        <ActiveLink
          path='/login'
          isActive={pathActive}
          Icon={BsFileTextFill}
        >
          Sign In
        </ActiveLink>

        <ActiveLink
          path='/register'
          isActive={pathActive}
          Icon={IoRocketSharp}
        >
          Sign Up
        </ActiveLink>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: transparent;

  > img {
    width: 12rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }
  
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;

    img {
      display: none;
    }

    strong {
      width: 100%;
      font-weight: 700;
      padding: 1rem;
      text-align: left;
      color: ${({theme}) => theme.colors.dark};
    }
  }

  @media screen and (max-width: 1400px){
    width: 8rem;

    > img {
      display: none;
    }

    nav {
      margin-top: 1.5rem;
      align-items: center;

      img {
        display: flex;
        width: 4rem;
      }
  
      a {
        width: auto;
      } 

      strong {
        display: none;
      }
    }
  }
`;