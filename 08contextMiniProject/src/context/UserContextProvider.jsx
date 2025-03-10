import React, { useState } from 'react';
import UserContext from './context';
const UserContextProvider = ({ children }) => {
  const [user, setUser] =useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
//user aur setUser context ke andar store ho gaye,
//jo ab kisi bhi component ko mil sakte hain.