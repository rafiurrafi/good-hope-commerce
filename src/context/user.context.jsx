import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({ user: {} });
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
