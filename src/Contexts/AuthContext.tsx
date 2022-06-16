import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

type UserSignProps = {
  email: string;
  password: string;
  remember?: boolean;
}

type AuthContextType = {
  user: User | null,
  signIn: (login: UserSignProps) => Promise<void>;
  signUp: (login: UserSignProps) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode
}

type User = {
  id: string;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  const getUserStorage = async () => {
    const storageJson = localStorage.getItem('soft-dashboard@user')

    return storageJson ? await JSON.parse(storageJson) as User : null;
  }

  useEffect(() => {

    getUserStorage().then(user => {
      if (user) {
        setUser(user);
      }

      setLoading(false);
    })
  }, [])

  const signIn = async ({ email, password, remember }: UserSignProps) => {
    try {
      const { data } = await api.post<User>('login', {
        email, password
      })

      if (data.id) {
        if (remember) {
          localStorage.setItem('soft-dashboard@user', JSON.stringify(data))
        }

        setUser({
          id: data.id
        })
      }

    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async ({ email, password }: UserSignProps) => {
    try {
      const { data } = await api.post<User>('register', {
        email, password
      })

      if (data.id) {
        setUser({
          id: data.id,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => {
    localStorage.removeItem('soft-dashboard@user');
    setUser(null);

    navigation('/login');
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}