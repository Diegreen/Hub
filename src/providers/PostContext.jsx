import { createContext, useContext, useEffect, useState } from "react";
import { PropsContext } from "./context";
import { api } from "../services/api";

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const { user } = useContext(PropsContext);
 

  return (
    <PostContext.Provider value={{ }}>
      {children}
    </PostContext.Provider>
  );
};
