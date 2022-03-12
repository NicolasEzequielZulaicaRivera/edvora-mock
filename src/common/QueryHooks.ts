type queryType<T> = {
  data: T;
  other?: any[];
};

export type userType = {
  station_code: number;
  name: string;
  url: string;
};
export const useUser = (): queryType<userType> => {
  return {
    data: {
      station_code: 40,
      name: "Dhruv Singh",
      url: "none",
    },
  };
};

export type rideType = {
  id: string;
  origin_station_code: number;
  station_path: number[];
  destination_station_code: number;
  date: number;
  map_url: string;
  state: string;
  city: string;
};
export const useRides = (): queryType<rideType[]> => {
  return {
    data: [
      {
        id: "001",
        origin_station_code: 23,
        station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
        destination_station_code: 93,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
      {
        id: "002",
        origin_station_code: 20,
        station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
        destination_station_code: 98,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
      {
        id: "003",
        origin_station_code: 13,
        station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
        destination_station_code: 91,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
    ],
  };
};

// TODO: Replace Mocks with Queries
