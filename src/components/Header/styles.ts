import styled from 'styled-components';

export const Container = styled.header`
  min-height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  div {
    font-size: 1.25rem;
    color: ${({theme}) => theme.colors.gray7};
    
    span {
      font-size: 1.25rem;
      color: ${({theme}) => theme.colors.dark};
    }
  }

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 1rem;
  border-radius: .5rem;
  border: .2rem solid ${({theme}) => theme.colors.gray5};

  svg {
    cursor: pointer;
  }

  input {
    font-size: 1rem;
    border: 0;
    outline: none;
    color: ${({theme}) => theme.colors.dark};
    background: transparent;
  }
`;

export const SignIn = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  gap: .5rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.gray8};
  background: transparent;
`;

export const Settings = styled.button`
  border: 0;
  background: transparent;
`;

export const Notifications = styled.div`
  cursor: pointer;
  position: relative;
`;

export const NotificationButton = styled.button`
  background: transparent;
  border: 0;
  z-index: 1;
`;

export const NotificationsContent = styled.div`
  width: 20rem;
  height: calc(100vh - 7rem);
  position: absolute;
  top: 4rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  overflow: hidden;
  border-radius: .5rem;
  outline: none;

  border: 0;
  box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray5};
  background: ${({theme}) => theme.colors.gray1};

  &.ReactModal__Content--after-open{
    top: 5.5rem;
    opacity: 1;
    transition: .3s;
  }
  
  &.ReactModal__Content--before-close{
    top: 4.5rem;
    opacity: 0;
    transition: .3s;
  }

  > ul {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    list-style: none;
    overflow-y: scroll;
    opacity: 0;
    
    border-radius: .5rem;
    transition: .3s;

    &.active {
      opacity: 100%;
      transition: .3s;
    }
    
    > li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem 0;
      transition: .3s;

      &:hover {
        background: ${({theme}) => theme.colors.gray4};
      }

      img {
        width: 2rem;
        height: 2rem;
        border-radius: .5rem;
      }

      > div {
        display: flex;
        flex-direction: column;

        > strong {
          display: flex;
          gap: .5rem;
          font-weight: 700;
          color: ${({theme}) => theme.colors.dark};

          > span {
            color: ${({theme}) => theme.colors.gray8};
          }
        }

        span {
          display: flex;
          gap: 1rem;
          color: ${({theme}) => theme.colors.gray7};
        }
      }
    }
  }

`