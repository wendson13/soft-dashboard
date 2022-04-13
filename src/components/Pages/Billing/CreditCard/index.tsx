import { AiOutlineWifi } from 'react-icons/ai';
import { SiMastercard, SiVisa } from 'react-icons/si';
import styled, { useTheme } from 'styled-components';

type CreditCardProps = {
  cardHolder: {
    flag: 'mastercard' | 'visa';
    name: string;
    cardNumber: string;
    expires: string;
  }
}

export function CreditCard ({ cardHolder } : CreditCardProps) {

  const { colors } = useTheme();

  return (
    <Container>
      <AiOutlineWifi size={32} color={colors.gray1}/>

      <h2>{cardHolder.cardNumber}</h2>

      <div>
        <p>
          <span>Card Holder</span>
          {cardHolder.name}
        </p>

        <p>
          <span>Expires</span>
          {
            Intl.DateTimeFormat('en-UK', {
              month: '2-digit',
              year: '2-digit'
            }).format(new Date(cardHolder.expires))
          }
        </p>

        {
          cardHolder.flag === 'mastercard' ?
          <SiMastercard size={42} color={colors.dark} />
          :
          <SiVisa size={42} color={colors.dark}/>
        }
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: url('/credit-card-bg.png') no-repeat left;
  background-size: cover;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray1};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 2rem;


    p {
      font-weight: 500;
      color: ${({theme}) => theme.colors.gray1};
      display: flex;
      flex-direction: column;

      span {
        font-weight: 400;
        color: ${({theme}) => theme.colors.gray6};
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;