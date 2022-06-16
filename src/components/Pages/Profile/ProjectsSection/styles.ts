import styled from 'styled-components';

export const CreateBox = styled.div`
  button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: .5rem;
    border: .1rem solid ${({ theme }) => theme.colors.gray6};
    background: transparent;

    span {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    width: 25%;
    word-break: break-word;
  }
`;

export const ImageUploadBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: '700';
    color: ${({ theme }) => theme.colors.dark};
  }

  span {
    color: ${({ theme }) => theme.colors.gray7};
  }
`;

export const FormModalNewProject = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 { 
    color: ${({ theme }) => theme.colors.dark};
  }

  > input {
    padding: 1rem .5rem;
    color: ${({ theme }) => theme.colors.dark};
    border: .1rem solid ${({ theme }) => theme.colors.dark};
    border-radius: .5rem;
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  textarea {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: .5rem;
    resize: none;
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;

  button {
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: .5rem;
    background: transparent;
    outline: none;

    &:focus {
      outline: .1rem solid ${({ theme }) => theme.colors.primary};
    }
  }

  button:last-child {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray1};
    background: ${({ theme }) => theme.gradients.dark};
  }
`;

export const AddMembersBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`;

export const BoxMemberListAdding = styled.div`
  width: 100%;
  display: flex;
  padding: .5rem;
  gap: .5rem;
`;

export const BoxNewMembersInput = styled.div`
  width: 100%;
  position: relative;
  
  input {
    width: 100%;
    font-size: 1.1rem;
    border: 0;
    padding: 1rem .5rem;
    border-radius: .5rem;
    border: .1rem solid ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.dark};
    outline: none;

    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  > div {
    position: absolute;
    top: 25%;
    right: 2%;
  }
`;