import { createContext, ReactNode, useState, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '../firebase/firebaseConfig';
import { TypeUser } from '../types/index';

type AuthContextType = {
  user: any;
  login: ({ mail, password }: TypeUser, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
  register: ({ mail, password }: TypeUser, callback: VoidFunction) => void;
};

const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();

  const register = async (
    { mail, password }: TypeUser,
    callback: VoidFunction
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, mail, password);
      callback();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name);
        console.log(error.message);
      }
    }
  };

  const login = async (
    { mail, password }: TypeUser,
    callback: VoidFunction
  ) => {
    try {
      const response = await signInWithEmailAndPassword(auth, mail, password);
      setUser(response.user);
      callback();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name);
        console.log(error.message);
      }
    }
  };

  const logout = async (callback: VoidFunction) => {
    await signOut(auth);
    callback();
  };

  const value = { user, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
