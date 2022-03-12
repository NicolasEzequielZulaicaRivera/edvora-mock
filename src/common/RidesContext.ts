import { createContext, Dispatch, SetStateAction, useState } from "react";

type ridesContextStateType = {
  filters: {
    state?: string;
    city?: string;
  };
};

const initialState: ridesContextStateType = {
  filters: {},
};

type ridesContextType = [
  state: ridesContextStateType,
  setState: Dispatch<SetStateAction<ridesContextStateType>>
];

const RidesContext = createContext<ridesContextType>([initialState, undefined]);

export const useRidesContextState = () => {
  return useState(initialState);
};

export default RidesContext;
