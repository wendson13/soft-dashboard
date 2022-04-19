import { BsFillCalendar2Fill } from 'react-icons/bs';
import styled, { useTheme } from 'styled-components';
import { BoxShadow } from '../../../Styles/Containers';
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
    <BoxShadow style={{ width: '70%', gap: '2rem' }}>
      <TitleBox>
        <h2>Your Transactions</h2>

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
        <h3>NEWEST</h3>

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
        <h3>YESTERDAY</h3>

        {
          transactions.yesterday.map(transaction => {
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
    </BoxShadow>
  );
}

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
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

  > h3 {
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors.gray8};
  }
`;
