import { useState } from 'react';
import { api } from '../../../../services/api';
import { BoxShadow } from '../../../Styles/Containers';
import { AuthorsTableEditable } from './AuthorsTableEditable';
import { FunctionBox, MemberBox, StatusBox, Table, TableRowBody, Title } from './styles';

type User = {
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

type UserChangeType = {
  id: string;
  employed: string;
  functions: {
    primary: string;
    secondary: string;
  }
}

type AuthorsTableProps = {
  users: User[];
  setUsersList: ({}: User[]) => void;
}

export function AuthorsTable ({ users, setUsersList }: AuthorsTableProps) {

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [currentEditingItem, setCurrentEditingItem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserListEditing = async ({ id, employed, functions }: UserChangeType) => {

    setLoading(true);

    const user = users.find(user => user.id === id)

    if(user){
     
      const { data : newUser } = await api.post<User>(`user/authors/${user.id}`, { 
        employed: new Date(employed).toJSON(), 
        functions
      })

      const result = users.map(user => {
        if(user.id === id){
          return newUser;
        }
        else {
          return user;
        }
      })

      setUsersList(result);
    }

    setLoading(false);
    setIsEditingMode(false);
  }

  return (
    <BoxShadow>
      <Title>Authors Table</Title>

      <Table>
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            users &&
            users.map(user => {
              return (
                isEditingMode && user.id === currentEditingItem ?

                  <AuthorsTableEditable
                    key={user.id} 
                    user={user}
                    saveEditing={handleUserListEditing}
                    isLoading={loading}
                  />

                :

                <TableRowBody key={user.id}>
                  <MemberBox>
                    <img src={user.imageUrl} alt={user.name} />
                    <div>
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                    </div>
                  </MemberBox>

                  <FunctionBox>
                    <p>
                      {user.functions?.primary}
                      <span>{user.functions?.secondary}</span>
                    </p> 
                  </FunctionBox>

                  <StatusBox status={user.status}>
                    <span>{user.status}</span>
                  </StatusBox>

                  <td>
                    <time>{Intl.DateTimeFormat('en-UK', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit'
                    }).format(new Date(user.employed))}</time>
                  </td>

                  <td>
                    <button onClick={() => {
                      setIsEditingMode(true);
                      setCurrentEditingItem(user.id)
                    }}>
                      Edit
                    </button>
                  </td>
                </TableRowBody>
              );
            })
          }
        </tbody>
      </Table>
    </BoxShadow>
  );
}
