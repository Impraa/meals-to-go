import { ReactNode, createContext, useState } from "react";
import { UserContextValue, UserType } from "../src/utils/Interfaces";
import React from "react";

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
