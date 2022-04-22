import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api';

type UserSignProps = {
  email: string,
  password: string
}

type AuthContextType = {
  user: User | undefined,
  signIn: (login: UserSignProps) => Promise<void>
  signUp: (login: UserSignProps) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

type User = {
  user: {
    id: string;
  }
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props : AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  const signIn = async ({ email, password }: UserSignProps) => {
    try {
      const { data } = await api.post<User>('login', {
        email, password
      })

      if(data.user){
        setUser({
          user: data.user
        })  
      }

    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async ({ email, password } : UserSignProps) => {
    try {
      const { data } = await api.put<User>('register', {
        email, password
      })

      if(data.user){
        setUser({
          user: data.user,
        })  
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp }}>
      {props.children}
    </AuthContext.Provider>
    )
}