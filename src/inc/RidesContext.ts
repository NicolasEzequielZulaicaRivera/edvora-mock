import { createContext, Dispatch, SetStateAction, useState } from "react";
import { rideType } from "./types";

type ridesContextStateType = {
  filters: {
    state?: string;
    city?: string;
  };
  nearest?: rideType[];
  past?: rideType[];
  upcoming?: rideType[];
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
