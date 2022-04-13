import styled, { useTheme } from 'styled-components';
import { AiOutlineInfoCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

type TransactionCardProps = {
  title: string;
  info: {
    amount: number;
    type: 'deposit' | 'withdraw' | 'pending';
    date: string;
  }
}

export function TransactionCard ({ title, info } : TransactionCardProps) {

  const { colors }  = useTheme();

  return (
    <Transaction type={info.type}>
      
      {
        info.type === 'deposit' ? <AiOutlinePlusCircle size={42} color={colors.success} /> 
        : info.type === 'withdraw' ? <AiOutlineMinusCircle size={42} color={colors.danger} />
        : <AiOutlineInfoCircle size={42} color={colors.gray8} />
      }

      <div>
        <strong>{title}</strong>
        <time>
          {Intl.DateTimeFormat('en-UK', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour12: true,
              hour: '2-digit',
              minute: '2-digit',
            }).format(new Date(info.date))}
        </time>
      </div>

      <span>
        {
          info.type === 'pending' ? 'pending'

          : `${info.amount > 0 ? '+' : ''}

            ${Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(info.amount)}
          `
        }
      </span>
      
    </Transaction>
  );
}

type TransactionType = {
  type: 'deposit' | 'withdraw' | 'pending';
}

const Transaction = styled.div<TransactionType>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: .25rem;

    strong {
      color: ${({theme}) => theme.colors.dark};
    }

    time {
      color: ${({theme}) => theme.colors.gray8};
    }
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
    margin-left: auto;
    color: ${({theme, type }) => (
      type === 'deposit' ? theme.colors.success
      : type === 'withdraw' ? theme.colors.danger
      : theme.colors.gray8
    )}
  }
  
`;