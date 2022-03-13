import { useContext, useEffect, useMemo } from "react";
import useSWR from "swr";
import { rides_endpoint, user_endpoint } from "../../common/common";
import { processRides } from "../../common/rides";
import RidesContext from "../../common/RidesContext";
import Navbar from "../Navigation/Navbar";
import SecondaryNavigation from "../Navigation/SecondaryNavigation";

const fetcher = async (url) => fetch(url).then(async (res) => res.json());

const Layout = ({ children, initialRides, initialUser }) => {
  const [, setRidesContext] = useContext(RidesContext);

  const rides = useSWR(rides_endpoint, fetcher, {
    fallbackData: initialRides,
  });
  const user = useSWR(user_endpoint, fetcher, {
    fallbackData: initialUser,
  });

  // This could be done async
  // Look into Suspense?, as we're only interested in showing a loading screen
  // would have to pass rides to the context & calculate this on the pages though
  const processedRides = useMemo(
    () => processRides(rides?.data, user?.data),
    [rides?.data, user?.data]
  );

  useEffect(() => {
    setRidesContext?.((context) => ({
      ...context,
      ...processedRides,
    }));
  }, [processedRides, setRidesContext]);

  return (
    <div>
      <Navbar user={user?.data} />
      <SecondaryNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
