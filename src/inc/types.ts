export type userType = {
  station_code: number;
  name: string;
  url: string;
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
  distance?: number;
};
