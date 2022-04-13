import { useState } from 'react';
import { RiSave2Fill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Spinner } from '../../../Loading';
import { CardNumber, PaymentInfo } from './styles';

type Flag = 'mastercard' | 'visa';

type PayMentInfoType = {
  id: string;
  flag: Flag;
  cardNumber: string;
}

type PaymentMethodEditingProps = {
  method: PayMentInfoType;
  handlePaymentMethodEditing: (method: PayMentInfoType) => void;
  loading: boolean
}

export function PaymentMethodEditing ({ method, handlePaymentMethodEditing, loading } : PaymentMethodEditingProps) {

  const [cardNumber, setCardNumber] = useState('');
  const [flag, setFlag] = useState<Flag>(method.flag);
  const [isInvalid, setIsInvalid] = useState(false);
  const { colors } = useTheme();

  const handleSaveEditingInfo = () => {
    const isNumber = Number(cardNumber)

    if(isNumber && cardNumber.length === 16){
      setIsInvalid(false);

      handlePaymentMethodEditing({
        ...method,
        cardNumber: cardNumber,
        flag
      })
    }
    else {
      setIsInvalid(true);
    }
  }

  return (
    <PaymentInfo key={method.cardNumber}>
    
      <select value={flag} onChange={(e) => setFlag(e.target.value as Flag)}>
        <option>mastercard</option>
        <option>visa</option>
      </select>
     
      <CardNumber invalid={isInvalid}>
        {
          isInvalid && <span>Card number invalid</span>
        }
        <input
          type={'text'}
          maxLength={16}
          minLength={16}
          placeholder='card number'
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
      </CardNumber>
      
      {
        loading ?
          <Spinner size={2}  borderSize={.5} />
        :
          <button
            onClick={handleSaveEditingInfo}
          >
            <RiSave2Fill size={32} color={colors.gray8} />
          </button>
      }
    </PaymentInfo>
);
}
