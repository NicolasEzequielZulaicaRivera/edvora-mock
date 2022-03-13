import { rideType, userType } from "./common";

export const processRides = (
  rides: rideType[],
  user: userType
): {
  nearest?: rideType[];
  past?: rideType[];
  upcoming?: rideType[];
} => {
  if (!rides) return {};

  const userStation = user?.station_code;

  // TODO
  // nearest, past, upcoming
  // .distance

  const nearest = rides;
  const past = rides;
  const upcoming = rides;

  return {
    nearest,
    past,
    upcoming,
  };
};
