import { useContext, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { rides_endpoint, user_endpoint } from "../../inc/common";
import { processRides } from "../../inc/client";
import RidesContext from "../../inc/RidesContext";
import Navbar from "../Navigation/Navbar";
import SecondaryNavigation, {
  countsType,
} from "../Navigation/SecondaryNavigation";

const fetcher = async (url) => fetch(url).then(async (res) => res.json());

const Layout = ({ children, initialRides, initialUser }) => {
  const [, setRidesContext] = useContext(RidesContext);

  const rides = useSWR(rides_endpoint, fetcher, {
    fallbackData: initialRides,
  });
  const user = useSWR(user_endpoint, fetcher, {
    fallbackData: initialUser,
  });

  const [ridesCounts, setRidesCounts] = useState<countsType>({});

  // This could slow page load . O(N logN) . solutions:
  // - make async: wouldn't hold page load . cant memoize (*easily)
  // - use Suspense: would be easy to show loading .  need to pass rides to the context & calculate this on the pages
  // - use a web worker: async & memoized . kinda overkill . would add to bundle size . would keep memo between page switches
  const processedRides = useMemo(
    () => processRides(rides?.data, user?.data),
    [rides?.data, user?.data]
  );

  useEffect(() => {
    setRidesContext?.((context) => ({
      ...context,
      ...processedRides,
    }));
    setRidesCounts({
      upcoming: processedRides?.upcoming?.length,
      past: processedRides?.past?.length,
    });
  }, [processedRides, setRidesContext]);

  return (
    <div>
      <Navbar user={user?.data} />
      <SecondaryNavigation counts={ridesCounts} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
