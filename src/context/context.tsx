import { ReactNode, createContext, useState, useContext } from 'react';
import { TUserContext, User } from '../types/User';

const UserContextDefaultValues: TUserContext = {
  user: { id: 0, avatar: '', name: '', department: '' },
  setUserDetail: (user: User) => {},
};

type TContextProps = {
  children: ReactNode;
};

const UserContext = createContext<TUserContext>(UserContextDefaultValues);

export function useUser() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }: TContextProps) {
  const [user, setUser] = useState<User>(UserContextDefaultValues.user);

  const setUserDetail = (user: User) => {
    setUser(user);
  };
  return (
    <UserContext.Provider value={{ user, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
}
