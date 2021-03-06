import dayjs from "dayjs";
import { MouseEventHandler } from "react";
import { filterType } from "./RidesContext";
import { rideType, stateType, userType } from "./types";

export const processRides = (
  rides: rideType[],
  user: userType,
  filters?: filterType
): {
  nearest?: rideType[];
  past?: rideType[];
  upcoming?: rideType[];
  states?: stateType[];
} => {
  if (!rides) return {};

  const states: stateType[] = rides.reduce((states, ride) => {
    let state: stateType = states.find((state) => state.name === ride.state);
    if (state && !state?.cities.includes(ride.city)) {
      state.cities = [...(state.cities ?? []), ride.city];
    } else {
      states.push({ name: ride.state, cities: [ride.city] });
    }

    return states;
  }, [] as stateType[]);

  if (filters) {
    rides = rides.filter((ride) => {
      if (filters.state && ride.state !== filters.state) return false;
      if (filters.city && ride.city !== filters.city) return false;
      return true;
    });
  }

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
    states,
  };
};

export const listInputActions = (
  handleChange: MouseEventHandler<HTMLInputElement>
) => {
  const onChange = (event) => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    handleChange(event);
  };

  const clear = (e) => {
    e.target.value = "";
  };

  return {
    onChange,
    onClick: clear,
    onFocus: clear,
  };
};
