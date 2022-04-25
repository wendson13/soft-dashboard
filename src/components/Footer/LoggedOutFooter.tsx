import { FaDribbble, FaGithub, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components'; 

export function LoggedOutFooter () {

  const { colors } = useTheme();

  return (
    <Footer>
      <div>
        <Link to=''>Company</Link>
        <Link to=''>About Us</Link>
        <Link to=''>Team</Link>
        <Link to=''>Products</Link>
        <Link to=''>Blog</Link>
        <Link to=''>Pricing</Link>
      </div>

      <div>
        <Link to=''>
          <FaDribbble size={20} color={colors.gray8}/>
        </Link>

        <Link to=''>
          <FaTwitter size={20} color={colors.gray8}/>
        </Link>

        <Link to=''>
          <FaInstagram size={20} color={colors.gray8}/>
        </Link>

        <Link to=''>
          <FaPinterest size={20} color={colors.gray8}/>
        </Link>

        <a href='https://github.com/wendson13'>
          <FaGithub size={20} color={colors.gray8}/>
        </a>
      </div>

      <p>Copyright © 2022 by Wendson Sousa</p>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
  margin-top: 5rem;

  > div:first-child {
    font-size: 1.15rem;
    display: flex;
    gap: 2rem;
    color: ${({theme}) => theme.colors.gray8};
  }

  > div{
    display: flex;
    gap: 1rem;
  }

  p {
    color: ${({theme}) => theme.colors.gray8};
  }
`;