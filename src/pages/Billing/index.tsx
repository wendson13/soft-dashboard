import { useEffect, useState } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { ImPaypal } from 'react-icons/im';
import { BillingsInfo } from '../../components/Pages/Billing/BillingsInfo';
import { CreditCard } from '../../components/Pages/Billing/CreditCard';
import { EarningsCard } from '../../components/Pages/Billing/EarningsCard';
import { Invoices } from '../../components/Pages/Billing/Invoices';
import { PaymentMethod } from '../../components/Pages/Billing/PaymentMethod';
import { Transactions } from '../../components/Pages/Billing/Transactions';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';
import { BillingBox, Container, EarningsCardBox, PaymentBox } from './styles';

type PaymentMethodType = {
  id: string;
  flag: 'mastercard' | 'visa';
  cardNumber: string;
}

type Invoice = {
  amount: number;
  cod: string;
  date: string;
}

type BillingType = {
  id: string
  name: string;
  company: string;
  email: string;
  vatNumber: string;
}

type Transaction = {
  id: string;
  title: string;
  info: {
    amount: number
    type: 'deposit' | 'withdraw' | 'pending';
    date: string;
  }
}

type DataType = {
  salary: number;
  paypal: number;

  cardHolder: {
    flag: 'mastercard' | 'visa';
    name: string;
    cardNumber: string;
    expires: string;
  },

  invoices : Invoice[], 

  transactions: {
    newest : Transaction[],
    yesterday: Transaction[],
  }
}

type DataFetch = DataType & {
  billingsInfo: BillingType[];
  paymentMethods: PaymentMethodType[];
}

export function Billing () {

  const [data, setData] = useState<DataType>();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodType[]>();
  const [billingsInfo, setBillingsInfo] = useState<BillingType[]>()

  useEffect(() => {
    api.get<DataFetch>('user/billing').then( ({data}) => {
      setData({
        cardHolder: data.cardHolder,
        invoices: data.invoices,
        paypal: data.paypal,
        salary: data.salary,
        transactions: data.transactions,
      });

      setBillingsInfo(data.billingsInfo);
      setPaymentMethods(data.paymentMethods);
    })
  }, [])

  if(!data || !billingsInfo || !paymentMethods){
    return (
      <Loading />
    );
  }

  return (
    <Container>
        <PaymentBox>
          <div>
            <div>
              <CreditCard cardHolder={data.cardHolder} />

              <EarningsCardBox>
                <EarningsCard 
                  Icon={AiFillBank} 
                  title='Salary' 
                  description='Belong Interactive' 
                  value={Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(data.salary)}
                />
                <EarningsCard 
                  Icon={ImPaypal} 
                  title='PayPal' 
                  description='Freelance Payment' 
                  value={Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(data.paypal)}
                />
              </EarningsCardBox>
            </div>

            <PaymentMethod paymentMethods={paymentMethods} setPaymentMethods={setPaymentMethods} />
          </div>

          <Invoices invoices={data.invoices} />
        </PaymentBox>
        
        <BillingBox>
          <BillingsInfo billings={billingsInfo} setBillings={setBillingsInfo} />

          <Transactions transactions={data.transactions} />
        </BillingBox>
    </Container>
  );
}
