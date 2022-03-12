import useSWR from "swr";
import { rides_endpoint, user_endpoint } from "../../common/common";
import Navbar from "../Navigation/Navbar";
import SecondaryNavigation from "../Navigation/SecondaryNavigation";

const fetcher = async (url) => fetch(url).then(async (res) => res.json());

const Layout = ({ children, initialRides, initialUser }) => {
  const rides = useSWR(rides_endpoint, fetcher, {
    fallbackData: initialRides,
  });
  const user = useSWR(user_endpoint, fetcher, {
    fallbackData: initialUser,
  });

  return (
    <div>
      <Navbar user={user?.data} />
      <SecondaryNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
