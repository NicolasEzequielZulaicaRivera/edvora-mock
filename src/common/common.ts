export const rides_endpoint = "https://assessment.api.vweb.app/rides";
export const user_endpoint = "https://assessment.api.vweb.app/user";

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
};

// Enabling SSR will make pages return with data
//  but it adds the overhead to the load time
// In this case i'd recommend not using SSR as:
// - The data is not in the same server as the page
// - SEO is not important
export const getInitialProps = async () => {
  if (!process.env.SERVER_SIDE_RENDER) return { props: {} };

  try {
    const rides = fetch(rides_endpoint).then((res) => res.json());
    const user = fetch(user_endpoint).then((res) => res.json());
    const data = await Promise.all([rides, user]);

    return {
      props: {
        initialRides: data[0],
        initialUser: data[1],
      },
    };
  } catch {
    return { props: {} };
  }
};
