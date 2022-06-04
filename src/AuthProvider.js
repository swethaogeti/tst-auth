// import React, { createContext, useContext, useState } from "react";
// const creathAuth = createContext({ users: null, token: null });
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({ user: null, token: null });
//   return (
//     <creathAuth.Provider value={{ user, setUser }}>
//       {children}
//     </creathAuth.Provider>
//   );
// };

// export const useAuth = () => useContext(creathAuth);
import { createContext, useContext, useState } from "react";

const createAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null, token: null });

  return (
    <createAuth.Provider value={{ user, setUser }}>
      {children}
    </createAuth.Provider>
  );
};

export const useAuth = () => useContext(createAuth);
