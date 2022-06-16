import { useState } from 'react';
import { Spinner } from '../../../Loading';
import { EmployedEditable, FunctionBoxEditable, MemberBox, StatusBox, TableRowBodyEditable } from './styles';

type userFunctionType = {
  primary: string;
  secondary: string;
}

type UserChangeType = {
  id: string;
  employed: string;
  functions: userFunctionType;
}

type AuthorsTableEditableProps = {
  user: {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
    status: 'Online' | 'Offline';
    employed: string;
    functions: {
      primary: string;
      secondary: string;
    }
  }

  saveEditing: ({ }: UserChangeType) => void;
  isLoading: boolean;
}

export function AuthorsTableEditable({ user, saveEditing, isLoading }: AuthorsTableEditableProps) {

  const [userFunction, setUserFunction] = useState<userFunctionType>(user.functions);
  const [employed, setEmployed] = useState(user.employed.substring(0, 10));

  const handleSaveUserInfo = async () => {

    saveEditing({
      id: user.id,
      functions: userFunction,
      employed: employed.replaceAll('-', ',')
    })
  }

  return (
    <TableRowBodyEditable key={user.id}>

      <MemberBox>
        <img src={user.imageUrl} alt={user.name} />
        <div>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      </MemberBox>

      <FunctionBoxEditable>
        <input
          autoFocus
          type="text"
          value={userFunction.primary}
          onChange={(e) => setUserFunction(state => (
            {
              primary: e.target.value,
              secondary: state.secondary
            }))
          }
        />

        <input
          type="text"
          value={userFunction.secondary}
          onChange={(e) => setUserFunction(state => (
            {
              primary: state.primary,
              secondary: e.target.value,
            }))
          }
        />
      </FunctionBoxEditable>

      <StatusBox status={user.status}>
        <span>{user.status}</span>
      </StatusBox>

      <EmployedEditable>
        <input
          type="date"
          value={employed}
          onChange={(e) => setEmployed(e.target.value)}
        />
      </EmployedEditable>

      <td>
        {
          isLoading ?
            <Spinner size={2} borderSize={.5} />
            :
            <button onClick={handleSaveUserInfo}>
              Save
            </button>
        }
      </td>
    </TableRowBodyEditable>
  );
}