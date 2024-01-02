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
  playerLevel: number | null;
  setPlayerLevel: Dispatch<SetStateAction<number | null>>;
}

const GlobalContext = createContext<IGlobalContext>({
  playerLevel: null,
  setPlayerLevel: () => null,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [playerLevel, setPlayerLevel] = useState<number | null>(null);

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
