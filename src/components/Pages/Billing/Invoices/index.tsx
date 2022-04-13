import { FaRegFilePdf } from 'react-icons/fa';
import styled, { useTheme } from 'styled-components';
import { BoxShadow } from '../../../Styles/Containers';

type Invoice = {
  amount: number;
  cod: string;
  date: string;
}

type InvoicesProps = {
  invoices : Invoice[],
}

export function Invoices ({ invoices } : InvoicesProps) {

  const { colors } = useTheme();

  return (
    <BoxShadow style={{ width: '30%', gap: '1.5rem' }}>
      <TitleBox>
        <h2>Invoices</h2>

        <button>VIEW ALL</button>
      </TitleBox>

      {
        invoices.map(invoice => {
          return (
            <InvoiceBox key={invoice.cod}>
              <strong>
                {Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric'
                }).format(new Date(invoice.date))}
                <p>{invoice.cod}</p>
              </strong>

        
              <span>{Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(invoice.amount)}</span>

              <button>
                <FaRegFilePdf size={24} color={colors.gray8} />
                PDF
              </button>
            </InvoiceBox>
          );
        })
      }
    </BoxShadow>
  );
}

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  h2 {
    color: ${({theme}) => theme.colors.dark};
    font-size: 1.5rem;
    font-weight: 700;
  }

  button {
    font-weight: 500;
    padding: .75rem 1.25rem;
    color: ${({theme}) => theme.colors.primary};
    border: .1rem solid ${({theme}) => theme.colors.primary};
    border-radius: .5rem;
    background: transparent;
  }
`;

const InvoiceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: .5rem;

  strong {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    color: ${({theme}) => theme.colors.dark};
    font-weight: 700;
    
    p {
      color: ${({theme}) => theme.colors.gray7};
    }
  }
  
  > span {
    margin-left: auto;
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray7};
  }

  button {
    display: flex;
    align-items: center;
    gap: .25rem;
    border: 0;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
    background: transparent;
  }
`;
