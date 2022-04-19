import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import { api } from '../../../../services/api';
import { Switch } from '../../../Switch';

type NotificationType = {
  follows: boolean;
  answers: boolean;
  mentions: boolean;
}

type AppNotificationType = {
  projects: boolean;
  products: boolean;
  newsletter: boolean;
}

type SettingsProps = {
  account: {
    follows: boolean;
    answers: boolean;
    mentions: boolean;
  };

  application: {
    projects: boolean;
    products: boolean;
    newsletter: boolean;
  }
}

export function Settings ({ account, application }: SettingsProps) {

  const [emailNotification, setEmailNotification] = useState<NotificationType>(account);

  const [appNotification, setAppNotification] = useState<AppNotificationType>(application)

  const handleSaveUserPreferences = async () => {
    api.put('user/notifications-settings', {
      account: emailNotification,
      application: appNotification,
    })
  }

  useEffect(() => {
    handleSaveUserPreferences();
  }, [emailNotification, appNotification])
  
  return (
    <Container>
      <h2>Profile Settings</h2>

      <Setting>
        <h3>ACCOUNT</h3>
        <div>
          <Switch 
            isChecked={emailNotification.follows} 
            toggle={() => setEmailNotification(state => ({...state, follows: !state.follows}))}
          />
          <p>Email me when someone follows me</p>
        </div>

        <div>
          <Switch 
            isChecked={emailNotification.answers}
            toggle={() => setEmailNotification(state => ({...state, answers: !state.answers}))}
          />
          <p>Email me when someone answers me</p>
        </div>

        <div>
          <Switch 
            isChecked={emailNotification.mentions} 
            toggle={() => setEmailNotification(state => ({...state, mentions: !state.mentions}))}
          />
          <p>Email me when someone mentions me</p>
        </div>
      </Setting>

      <Setting>
        <h3>APPLICATION</h3>
        <div>
          <Switch 
            isChecked={appNotification.projects} 
            toggle={() => setAppNotification(state => ({...state, projects: !state.projects}))}
          />
          <p>New launches and projects</p>
        </div>

        <div>
          <Switch 
            isChecked={appNotification.products} 
            toggle={() => setAppNotification(state => ({...state, products: !state.products}))}
          />
          <p>Monthly product updates</p>
        </div>

        <div>
          <Switch 
            isChecked={appNotification.newsletter} 
            toggle={() => setAppNotification(state => ({...state, newsletter: !state.newsletter}))}
          />
          <p>Subscribe to newsletter</p>
        </div>
      </Setting>
    </Container>
);
}

const Container = styled.div`
  max-width: 27rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
  background: ${({theme}) => theme.colors.gray1};
`;

const Setting = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray9};
  }

  > div {
    display: flex;
    gap: 1rem;

    p {
      color: ${({theme}) => theme.colors.gray8};
    }
  }
`;