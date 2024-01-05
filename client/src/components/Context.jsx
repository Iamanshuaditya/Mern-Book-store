import { createContext, useContext, useState } from "react";

const MyContext = createContext("z");

export const Myprovider = ({ children }) => {
  const [Bookdata, setBookdata] = useState([]);
  const addBookToData = (newBook) => {
    setBookdata((prevData) => [...prevData, newBook]);
  };

  const contextValue = {
    Bookdata,
    setBookdata: addBookToData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
