"use client";

import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IMapMissionContext {
  completeMission: boolean;
  setCompleteMission: Dispatch<SetStateAction<boolean>>;
}

const MapMissionsContext = createContext<IMapMissionContext>({
  completeMission: false,
  setCompleteMission: () => false,
});

interface MapMissionsContextProviderProps {
  children: ReactNode;
}

export const MapMissionsContextProvider: FC<
  MapMissionsContextProviderProps
> = ({ children }) => {
  const [completeMission, setCompleteMission] = useState<boolean>(false);

  return (
    <MapMissionsContext.Provider
      value={{
        completeMission,
        setCompleteMission,
      }}
    >
      {children}
    </MapMissionsContext.Provider>
  );
};

export default MapMissionsContext;
