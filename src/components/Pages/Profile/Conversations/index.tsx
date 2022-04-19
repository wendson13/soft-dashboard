import styled from 'styled-components'; 
import { BoxShadow } from '../../../Styles/Containers';

type Conversation = {
  id: string;
  imageUrl: string;
  name: string;
  message: string;
}

type ConversationsProps = {
  conversations: Conversation[];
}

export function Conversations ({ conversations } : ConversationsProps) {
  return (
    <BoxShadow style={{ width: '100%' }}>
      <h2>Conversations</h2>

      <ConverSationsBox>
        {
          conversations.slice(0, 5).map(item => {
            return (
              <Content key={item.id}>
                <img src={item.imageUrl} alt={item.name} />

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.message.length > 25 ? `${item.message.slice(0, 25)}...` : item.message}</span>
                </div>

                <button>REPLY</button>
              </Content>
            );
          })
        }
      </ConverSationsBox>
    </BoxShadow>
  );
}

const ConverSationsBox = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 2rem;
`;

const Content = styled.li`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  img {
    width: 3rem;
    height: 3rem;
    border-radius: .5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 700;
      color: ${({theme}) => theme.colors.dark};
    }

    span {
      color: ${({theme}) => theme.colors.gray8};
    }
  }

  button {
    font-weight: 700;
    border: 0;
    color: ${({theme}) => theme.colors.primary};
    background: transparent;
    margin-left: auto;
    margin-right: 1rem;
  }
`;
