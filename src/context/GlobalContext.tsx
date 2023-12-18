"use client";

import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IGlobalContext {
  playerLevel: number;
  setPlayerLevel: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<IGlobalContext>({
  playerLevel: 0,
  setPlayerLevel: () => 0,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [playerLevel, setPlayerLevel] = useState<number>(1);

  return (
    <GlobalContext.Provider
      value={{
        playerLevel,
        setPlayerLevel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
