import { createContext, useState } from "react";

export const titleContext = createContext();

const TitleContextProvider = (props) => {
  const [username, setUserName] = useState("CodeHub");
  const livein = "YGN";
  return (
    <titleContext.Provider value={{ username, livein }}>
      {props.children}
    </titleContext.Provider>
  );
};

export default TitleContextProvider;
