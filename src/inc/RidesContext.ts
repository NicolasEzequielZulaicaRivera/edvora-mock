import { createContext, Dispatch, SetStateAction, useState } from "react";
import { rideType, stateType } from "./types";

export type filterType = {
  state?: string;
  city?: string;
};

type ridesContextStateType = {
  filters: filterType;
  nearest?: rideType[];
  past?: rideType[];
  upcoming?: rideType[];

  states?: stateType[];
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
