import { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { useTheme } from 'styled-components'; 
import { api } from '../../../../services/api';
import { Spinner } from '../../../Loading';
import { BoxShadow } from '../../../Styles/Containers';
import { About, List, SaveButton, TitleBox } from './styles';

type Social = {
  imageUrl: string;
  link: string;
}

type Info = {
  imageUrl: string;
  name: string;
  function: string;
  about: string;
  mobile: string;
  email: string;
  location: string;
  social: Social[];
}

type ProfileInfoProps = {
  info: Info;

  setInfo: (data: Info) => void;
}

export function ProfileInfo ({ info, setInfo }: ProfileInfoProps) {

  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [about, setAbout] = useState('');
  const { colors } = useTheme();

  const handleSaveProfileInfo = async () => {
    setLoading(true);

    if(about.trim()){
      await api.put('user/profile-about', {about})

      setInfo({
        ...info,
        about: about,
      })
    }

    setIsEditMode(false);
    setLoading(false);
  }

  return (
    <BoxShadow style={{ width: '100%' }}>
      
      <TitleBox>
        <h2>Profile Information</h2>

        {
          !isEditMode ? (
            <HiPencil 
              size={24} 
              color={colors.gray8}
              onClick={() => setIsEditMode(true)}
            />
          )

          :

          loading ? 
            <Spinner size={2}  borderSize={.5} />
          :
            <SaveButton
              onClick={handleSaveProfileInfo}
            >Save</SaveButton>
        }
      </TitleBox>

      <About>
        {
          isEditMode ?
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          :
          <p>{info.about}</p>
        }
      </About>

      <List>
        <li>
          Full Name: <span>{info.name}</span>
        </li>
        <li>
          Mobile: <span>{info.mobile}</span>
        </li>
        <li>
          Email: <span>{info.email}</span>
        </li>
        <li>
          Location: <span>{info.location}</span>
        </li>
        <li>
          Social:
          <div>
            {
              info.social.map((item, index) => {
                return <a key={item.link + index} href={item.link} target='_blank' rel='noopener'><img src={item.imageUrl} /></a>
              })
            }
          </div>
        </li>
      </List>
    </BoxShadow>
  );
}
