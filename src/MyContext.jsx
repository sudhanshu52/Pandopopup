import { useState } from "react";
//import { MyContext } from "./MyContext";
import { createContext } from 'react';

export const myContext = createContext("");


export const MyContext=({children})=> {
  const [text, setText] = useState("");

  return (
    <div>
      <myContext.Provider value={{ text, setText }}>
        {children}
      </myContext.Provider>
    </div>
  );
}



