import { BsFillCalendar2Fill } from 'react-icons/bs';
import styled, { useTheme } from 'styled-components';
import { TransactionCard } from './TransactionCard';

type Transaction = {
  id: string;
  title: string;
  info: {
    amount: number;
    type: 'deposit' | 'withdraw' | 'pending';
    date: string;
  }
}

type TransactionsProps = {
  transactions: {
    newest : Transaction[],
    yesterday: Transaction[],
  }
}

export function Transactions ( { transactions } : TransactionsProps) {

  const { colors }  = useTheme();

  return (
    <Container>
      <TitleBox>
        <strong>Your Transactions</strong>

        <span>
          <BsFillCalendar2Fill size={24} color={colors.gray8}/>
          {
            Intl.DateTimeFormat('en-UK', {
              day: '2-digit',
            }).format(new Date())
          }
          -
          {
            Intl.DateTimeFormat('en-UK', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }).format(new Date())
          }
        </span>
      </TitleBox>

      <TransactionBox>
        <strong>NEWEST</strong>

        {
          transactions.newest.map(transaction => {
            return (
              <TransactionCard 
                key={transaction.id}
                title={transaction.title}
                info={transaction.info}
              />
            );
          })
        }

      </TransactionBox>

      <TransactionBox>
        <strong>YESTERDAY</strong>

        {
          transactions.yesterday.map(transaction => {
            return (
              <TransactionCard 
                title={transaction.title}
                info={transaction.info}
              />
            );
          })
        }

      </TransactionBox>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

  span {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.gray7};
  }
`;

const TransactionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  > strong {
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors.gray8};
  }
`;
