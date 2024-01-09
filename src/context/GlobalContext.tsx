"use client";

import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IQuests } from "../../types";

interface IGlobalContext {
  playerLevel: number | null;
  setPlayerLevel: Dispatch<SetStateAction<number | null>>;

  availableMissions: IQuests[] | [];
  setAvailableMissions: Dispatch<SetStateAction<IQuests[] | []>>;

  missionsLocked: IQuests[] | [];
  setMissionsLocked: Dispatch<SetStateAction<IQuests[] | []>>;

  completeMissions: IQuests[] | [];
  setCompleteMissions: Dispatch<SetStateAction<IQuests[] | []>>;

  handleUpdatedMissions: boolean;
  setHandleUpdatedMission: Dispatch<SetStateAction<boolean>>;

  missionsSelector: string;
  setMissionsSelector: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<IGlobalContext>({
  playerLevel: null,
  setPlayerLevel: () => null,

  availableMissions: [],
  setAvailableMissions: () => [],

  missionsLocked: [],
  setMissionsLocked: () => [],

  completeMissions: [],
  setCompleteMissions: () => [],

  handleUpdatedMissions: false,
  setHandleUpdatedMission: () => false,

  missionsSelector: "",
  setMissionsSelector: () => "",
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [playerLevel, setPlayerLevel] = useState<number | null>(null);

  const [availableMissions, setAvailableMissions] = useState<IQuests[] | []>(
    []
  );

  const [missionsLocked, setMissionsLocked] = useState<IQuests[] | []>([]);

  const [completeMissions, setCompleteMissions] = useState<IQuests[] | []>([]);

  const [handleUpdatedMissions, setHandleUpdatedMission] =
    useState<boolean>(false);

  const [missionsSelector, setMissionsSelector] = useState<string>("available");

  return (
    <GlobalContext.Provider
      value={{
        playerLevel,
        setPlayerLevel,
        availableMissions,
        setAvailableMissions,
        missionsLocked,
        setMissionsLocked,
        completeMissions,
        setCompleteMissions,
        handleUpdatedMissions,
        setHandleUpdatedMission,
        missionsSelector,
        setMissionsSelector,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
