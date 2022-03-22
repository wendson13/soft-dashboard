import { useState } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoSettingsSharp, IoNotifications } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Container, Menu, NotificationButton, Notifications, NotificationsContent, Search, Settings, SignIn, Title } from './styles';
import ReactModal from 'react-modal';

export function Header () {

  const { colors } = useTheme();
  const [isOpenNotification, setIsOpenNotification] = useState(false)

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
            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>

            <li>
              <img src="https://github.com/wendson13.png" alt="wendson" />

              <div>
                <strong>
                  New message 
                  <span>from Laur</span>
                </strong>

                <span>
                  <MdWatchLater size={24} color={colors.gray8}/>
                  13 minutes ago
                </span>
              </div>
            </li>
          </ul>
      </ReactModal>
    </Container>
  );
}
