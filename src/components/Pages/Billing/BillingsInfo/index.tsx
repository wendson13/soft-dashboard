import { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { api } from '../../../../services/api';
import { Spinner } from '../../../Loading';
import { BoxShadow } from '../../../Styles/Containers';
import { BillingsInfoEditing } from './BillingsInfoEditing';
import { BillingContent, BillingInfo, Title, TitleBox } from './styles';

type BillingType = {
  id: string;
  name: string;
  company: string;
  email: string;
  vatNumber: string;
}

type BillingInfoProps = {
  billings: BillingType[];
  setBillings: (billings: BillingType[]) => void;
}

export function BillingsInfo ({ billings, setBillings } : BillingInfoProps) {

  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEditing, setCurrentEditing] = useState('');
  const [currentDelete, setCurrentDelete] = useState('');
  const { colors } = useTheme();

  const handleDeleteBillingInfo = async (id: string) => {
    setCurrentDelete(id);
    setLoading(true);

    const billing = billings.find(billing => billing.id === id)

    if(billing){

      await api.delete(`user/billing/info/${id}`);

      const result = billings.filter(billing => billing.id !== id);

      setBillings(result);
  
      setLoading(false);
    }

  }

  const handleBillingInfoEditing = async (billingData: BillingType) => {
    setLoading(true);

    const billingExist = billings.find(billing => billing.id === billingData.id)

    if(billingExist){

      await api.put(`user/billing/info/${billingData.id}`, billingData);

      const result = billings.map(billing => {
        if(billing.id === billingData.id){
          return billingData;
        }
        else {
          return billing;
        }
      });

      setBillings(result);
      setIsEditMode(false);
      setLoading(false);
    }
  }

  return (
    <BoxShadow style={{ width: '100%', gap: '1rem' }}>
      <Title>Billing Information</Title>

      {
        billings.slice(0, 3).map(billing => {
          return (
            isEditMode && currentEditing === billing.id ? 

            <BillingsInfoEditing
              key={billing.id}
              billing={billing}
              loading={loading}
              handleBillingInfoEditing={handleBillingInfoEditing}
            />

            :

            <BillingInfo key={billing.id}>
              <TitleBox>
                <strong>{billing.name}</strong>

                {
                  loading && currentDelete === billing.id && !isEditMode ? 
                  <Spinner size={2}  borderSize={.5} />
                  :
                  <>
                    <button
                      onClick={() => handleDeleteBillingInfo(billing.id)}
                    >
                      <RiDeleteBin6Fill size={20} color={colors.danger}/>
                      DELETE
                    </button>
                    <button
                      onClick={() => {
                        setCurrentEditing(billing.id);
                        setIsEditMode(true)
                      }}
                    >
                      <HiPencil size={20} color={colors.gray8}/>
                      EDIT
                    </button>
                  </>
                }
              </TitleBox>

              <BillingContent>
                <p>Company Name: <span>{billing.company}</span></p>
                <p>Email Address: <span>{billing.email}</span></p>
                <p>VAT Number: <span>{billing.vatNumber}</span></p>
              </BillingContent>
            </BillingInfo>
          );
        })
      }
    </BoxShadow>
  );
}
