import styled from 'styled-components';

export function Footer () {

  return (
    <Container>
      <span>
        © 2022,
        by <strong>Wendson Sousa</strong>
      </span>

      <div>
        <a href="https://github.com/wendson13" target='_blank' rel='noopener'>
          Github
        </a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="https://github.com/wendson13/soft-dashboard/blob/main/LICENSE" target='_blank' rel='noopener'>
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
  padding: 2rem 4rem;

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
