import { useEffect, useState } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoSettingsSharp, IoNotifications } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Container, Menu, NotificationButton, Notifications, NotificationsContent, Search, Settings, SignIn, Title } from './styles';
import ReactModal from 'react-modal';
import { api } from '../../services/api';
import { Spinner } from '../Loading';

type NotificationType = {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  date: string;
}

type NotificationsType = {
  notifications: NotificationType[];
  total: number;
}

export function Header () {

  const { colors } = useTheme();
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [data, setData] = useState<NotificationsType>();

  useEffect(() => {
    api.get<NotificationsType>('user/notification').then(({data}) => {
      setData(data);
    })
  }, [])

  const timeSince = (date: Date) => {

    // time in seconds
    const year = 31536000;
    const month = 2592000;
    const days = 86400;
    const hours = 3600;
    const minutes = 60;

    const difference = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = difference / year;

    if(interval > 1) {
      return Math.floor(interval) + " years";
    }

    interval = difference / month;

    if(interval > 1){
      return Math.floor(interval) + " months";
    }

    interval = difference / days;

    if(interval > 1){
      return Math.floor(interval) + " days";
    }

    interval = difference / hours;

    if(interval > 1){
      return Math.floor(interval) + " hours";
    }

    interval = difference / minutes;

    if(interval > 1){
      return Math.floor(interval) + " minutes";
    }
    
    return Math.floor(difference) + " seconds";
  }

  return (
    <Container>
      <Title>
        <div>Pages / <span>Dashboard</span></div>
        <strong>Dashboard</strong>
      </Title>

      <Menu>
        <Search>
          <FaSearch size={20} color={colors.gray8} />
          <input type='search' placeholder='Type here...' />
        </Search>
        
        <SignIn>
          <FaUserCircle size={28} color={colors.gray8}/>
          sign In
        </SignIn>
        
        <Settings>
          <IoSettingsSharp size={26} color={colors.gray8} />
        </Settings>

        <NotificationButton onClick={() => setIsOpenNotification(!isOpenNotification)}>
          <IoNotifications size={26} color={colors.gray8}/>
        </NotificationButton>

      </Menu>
      
      <ReactModal
        isOpen={isOpenNotification}
        onRequestClose={() => setIsOpenNotification(false)}
        style={{
          overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
          },
        }}
        closeTimeoutMS={250}
        contentLabel={"Example Modal"}
        portalClassName={"ReactModalPortal"}
        overlayClassName={"ReactModal__Overlay"}
        id={"some-id"}
        className={"ReactModal__Content"}
        bodyOpenClassName={"ReactModal__Body--open"}
        htmlOpenClassName={"ReactModal__Html--open"}
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        role={"dialog"}
        preventScroll={false}
        parentSelector={() => document.body}
        aria={
          {
            labelledby: "heading",
            describedby: "full_description"
          }
        }

        contentElement={(props, children) => <NotificationsContent {...props}>{children}</NotificationsContent>}
      >
        <ul className={isOpenNotification ? 'active' : ''}>
          {
            data ?
            data.notifications.map(notification => {
              return (
                <li key={notification.id}>
                  <img src={notification.imageUrl} alt={notification.name} />

                  <div>
                    <strong>
                      {notification.type} 
                      <span>from {notification.name}</span>
                    </strong>

                    <span>
                      <MdWatchLater size={24} color={colors.gray8}/>
                      {
                        timeSince(new Date(notification.date))
                      }
                    </span>
                  </div>
                </li>
              );
            })
            :

            <div>
              <Spinner size={5} borderSize={.75} />
            </div>
          }

          {
            data &&
            data.total > 5 &&
            <button>More</button>
          }
        </ul>
      </ReactModal>
    </Container>
  );
}
