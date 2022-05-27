import { useTheme } from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { SiMastercard, SiVisa } from 'react-icons/si';
import { BoxShadow } from '../../../Styles/Containers';
import { FormEvent, useState } from 'react';
import { Content, FormAddCreditCard, PaymentInfo, TitleBox } from './styles';
import { PaymentMethodEditing } from './PaymentMethodEditing';
import { api } from '../../../../services/api';
import { Spinner } from '../../../Loading';
import { Modal } from '../../../Modal';
import * as Dialog from '@radix-ui/react-dialog';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { Select } from '../../../Select';

type Flags = 'mastercard' | 'visa';

type PayMentInfoType = {
  id: string;
  flag: Flags;
  cardNumber: string;
}

type PaymentMethodProps = {
  paymentMethods: PayMentInfoType[];
  setPaymentMethods: (methods: PayMentInfoType[]) => void;
}

export function PaymentMethod({ paymentMethods, setPaymentMethods }: PaymentMethodProps) {

  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEditing, setCurrentEditing] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCreditCardData, setNewCreditCardData] = useState({
    cardNumber: '',
    flag: ''
  });
  const { colors } = useTheme();

  const handlePaymentMethodEditing = async (method: PayMentInfoType) => {
    setLoading(true);

    const payment = paymentMethods.find(methods => methods.id === method.id)

    if (payment) {

      const { data } = await api.put<PayMentInfoType>(`user/payment-method/${method.id}`, method)

      const result = paymentMethods.map(methods => {
        if (methods.id === method.id) {
          return data;
        }
        else {
          return methods;
        }
      });

      setPaymentMethods(result);

      setLoading(false);
      setIsEditMode(false);
    }
  }

  const handleAddingNewCreditCard = async (event: FormEvent) => {
    setLoading(true);

    event.preventDefault();

    const { data } = await api.post<PayMentInfoType>('user/payment-method', {
      ...newCreditCardData
    })

    setPaymentMethods([
      ...paymentMethods,
      data
    ])

    setNewCreditCardData({
      cardNumber: '',
      flag: '',
    })

    setLoading(false);
    setIsModalOpen(false);
  }

  const handleCancelAddingNewCreditCard = () => {
    if (!loading) {
      setNewCreditCardData({
        cardNumber: '',
        flag: '',
      });

      setLoading(false);
      setIsModalOpen(false);
    }
  }

  const handleChangeValueFlag = (value: string) => {
    setNewCreditCardData(state => ({
      ...state,
      flag: value,
    }));
  }

  return (
    <BoxShadow style={{ width: '100%', height: '100%', gap: '2rem' }}>
      <Modal isOpen={isModalOpen} width={'40%'}>
        <FormAddCreditCard onSubmit={handleAddingNewCreditCard}>
          <h2>Payment Information</h2>

          <div>
            <label>Credit card number
              <input type="text" minLength={16} maxLength={16} required
                value={newCreditCardData.cardNumber}
                onChange={e => setNewCreditCardData(state => ({
                  ...state,
                  cardNumber: e.target.value,
                }))}
              />
            </label>

            <Select
              selectItemsId={['visa', 'mastercard']}
              onValueChange={handleChangeValueFlag}
            />
          </div>

          <div>
            <label>Expires
              <div>
                <input
                  type={'number'}
                  placeholder={'MM'}
                  required
                  min={new Date().getMonth()}
                  max={12}
                />
                /

                <input
                  placeholder={'YYYY'}
                  type="number"
                  minLength={4}
                  maxLength={4}
                  required
                  min={new Date().getFullYear()}
                />
              </div>
            </label>


            <label>Security code
              <input
                placeholder={'CVV'}
                type="text"
                minLength={3}
                maxLength={3}
                required
              />
            </label>

          </div>


          <label>Name on card
            <input
              type="text"
              minLength={5}
              required />
          </label>

          <div>
            <Dialog.Close
              aria-label="Close"
              type={'button'}
              onClick={handleCancelAddingNewCreditCard}
            >Cancel</Dialog.Close>
            {
              loading ?
                <AccessibleIcon.Root
                  label='loading spinner.'
                  children={<Spinner size={2} borderSize={.5} />}
                />
                :
                <button
                  type="submit"
                >
                  Add this card
                </button>
            }
          </div>
        </FormAddCreditCard>
      </Modal>

      <TitleBox>
        <h2>Payment Method</h2>
        <button
          onClick={() => setIsModalOpen(true)}
        >ADD NEW CARD</button>
      </TitleBox>

      <Content>
        {
          paymentMethods.map(method => {
            return (
              isEditMode && currentEditing === method.id ?

                <PaymentMethodEditing
                  key={method.id}
                  method={method}
                  handlePaymentMethodEditing={handlePaymentMethodEditing}
                  loading={loading}
                />

                :
                <PaymentInfo key={method.id}>
                  {
                    method.flag === 'mastercard' ?
                      <SiMastercard size={42} color={colors.dark} />
                      :
                      <SiVisa size={42} color={colors.dark} />
                  }
                  <p>{method.cardNumber}</p>

                  <button
                    onClick={() => {
                      if (loading) return;

                      setIsEditMode(true);
                      setCurrentEditing(method.id);
                    }}
                  >
                    <HiPencil size={24} color={colors.gray8} />
                  </button>
                </PaymentInfo>
            );
          })
        }
      </Content>

    </BoxShadow>
  );
}
