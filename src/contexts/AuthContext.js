import {createContext, useState} from "react";
// import axiosInstance from "../hooks/axiosInstance";

export const UserContext = createContext();

const UserContextWrap = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem("loggedIn")) ? true : false
  );
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children && children}
    </UserContext.Provider>
  );
};

export default UserContextWrap;
