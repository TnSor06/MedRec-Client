import React, { createContext, useState } from "react";
import { USER_DATA } from "../constants";

export const CurrentUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

// We create a provider like Redux provider in index.js
const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem(USER_DATA)
      ? JSON.parse(localStorage.getItem(USER_DATA))
      : null
  );

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
