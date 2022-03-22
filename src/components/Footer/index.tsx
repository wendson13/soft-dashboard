import { FaHeart } from 'react-icons/fa';
import styled, { useTheme } from 'styled-components';

export function Footer () {

  const { colors } = useTheme();

  return (
    <Container>
      <span>
        © 2022,
        <FaHeart color={colors.gray7} />
        by <strong>Wendson Sousa</strong>
      </span>

      <div>
        <a href="https://github.com/wendson13" target='_blank' ref='noopener'>
          Github
        </a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="https://github.com/wendson13/soft-dashboard/blob/main/LICENSE" target='_blank' ref='noopener'>
          License
        </a>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  > span {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${({theme}) => theme.colors.gray8};

    strong {
      font-weight: 700;
      color: ${({theme}) => theme.colors.dark};
    }
  }

  > div {
    display: flex;
    gap: 2rem;

    a {
      color: ${({theme}) => theme.colors.gray8};
    }
  }
`;
