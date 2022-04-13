import { useState } from 'react';
import { RiSave2Fill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Spinner } from '../../../Loading';
import { BillingContent, BillingInfo, TitleBox } from './styles';


type BillingType = {
  id: string;
  name: string;
  company: string;
  email: string;
  vatNumber: string;
}

type BillingsInfoEditingProps = {
  billing: BillingType;
  loading: boolean;
  handleBillingInfoEditing: (billing: BillingType) => void;
}

export function BillingsInfoEditing ({ billing, loading, handleBillingInfoEditing } : BillingsInfoEditingProps) {

  const [name, setName] = useState(billing.name);
  const [companyName, setCompanyName] = useState(billing.company);
  const [email, setEmail] = useState(billing.email);
  const { colors } = useTheme();

  return (
    <BillingInfo key={billing.vatNumber}>
      <TitleBox>
        <input value={name} onChange={e => setName(e.target.value)} />

        {
          loading ? 
          <Spinner size={2}  borderSize={.5} />
          :
          
          <button
            onClick={() => handleBillingInfoEditing({
              ...billing,
              company: companyName,
              email,
              name
            })}
          >
            <RiSave2Fill size={20} color={colors.gray8}/>
            Save
          </button>
        }
      </TitleBox>

      <BillingContent>
        <p>Company Name: <input value={companyName} onChange={e => setCompanyName(e.target.value)} /></p>
        <p>Email Address: <input value={email} onChange={e => setEmail(e.target.value)} /></p>
        <p>VAT Number: <span>{billing.vatNumber}</span></p>
      </BillingContent>
    </BillingInfo>
  );
}
