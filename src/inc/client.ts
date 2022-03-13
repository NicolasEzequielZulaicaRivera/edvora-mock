import dayjs from "dayjs";
import { rideType, userType } from "./types";

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

  if (userStation) {
    rides.forEach((ride) => {
      // get shortest station difference
      ride.distance = ride.station_path.reduce((minDist, station) => {
        const dist = Math.abs(station - userStation);
        return dist < minDist ? dist : minDist;
      }, Math.abs(ride.station_path[0] - userStation));
    });
  }

  // sort by shortest distance
  const nearest = rides.sort((a, b) => a.distance - b.distance);

  // filter where date is in past
  // and sort by sooner date
  const past = rides
    .filter((ride) => dayjs(ride?.date).isBefore(dayjs()))
    .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  // filter where date is in future
  // and sort by most recent
  const upcoming = rides
    .filter((ride) => dayjs().isBefore(dayjs(ride?.date)))
    .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

  // info: rides that take place in the exact moment are neither past nor upcoming

  return {
    nearest,
    past,
    upcoming,
  };
};
