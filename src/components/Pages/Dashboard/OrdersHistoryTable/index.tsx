import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import styled, { useTheme } from 'styled-components';
import { calcPercentageDifference } from '../../../../pages/Dashboard';
import { BoxShadow } from '../../../Styles/Containers';

type Order = {
  id: number;
  imageUrl: string;
  message: string;
  createdAt: string;
}

type OrdersHistoryTableProps = {
  orders: {
    lastMonth: number;

    list: Order[];
  }
}

export function OrdersHistoryTable ({ orders } : OrdersHistoryTableProps) {

  const ordersDifferentPercentage = calcPercentageDifference(orders.list.length, orders.lastMonth)
  const { colors } = useTheme();

  return (
    <BoxShadow style={{ gap: '2rem' }}>
      <TitleBox>
        <h2>Orders History</h2>
        <span>
          {
            ordersDifferentPercentage > 0
            ? <BiUpArrowAlt size={24} color={colors.success} />
            : <BiDownArrowAlt size={24} color={colors.danger} />
          }
          {ordersDifferentPercentage.toFixed(0)}% this month
        </span>
      </TitleBox>

      <OrdersBox>
        {
          orders.list.map(order => {
            return (
              <div key={order.id}>
                <OrderIcon>
                  <img src={order.imageUrl} alt="order" />
                  <div />
                </OrderIcon>

                <OrderContent>
                  <strong>{order.message}</strong>
                  <time>
                    {Intl.DateTimeFormat('en-UK', {
                      day: '2-digit',
                      month: 'short',
                      hour: 'numeric',
                      minute: '2-digit',
                    }).format(new Date(order.createdAt))}
                  </time>
                </OrderContent>
              </div>
            );
          })
        }
      </OrdersBox>
    </BoxShadow>
  );
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
  }

  span{
    font-size: 1.15rem;
    display: flex;
    align-items: center;
  }
`;

const OrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

const OrderIcon = styled.div`
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
  }

  &::after {
    content: '';
    display: block;
    width: .25rem;
    height: 2rem;
    background: ${({theme}) => theme.colors.gray4};
  }
`;

const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  margin-top: .5rem;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
  }

  time {
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray7};
  }

`;