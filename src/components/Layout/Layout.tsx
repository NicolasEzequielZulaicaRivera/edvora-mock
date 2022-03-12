import Navbar from "../Navigation/Navbar";
import SecondaryNavigation from "../Navigation/SecondaryNavigation";

const Layout = ({ children }) => {
  const mockUser = {
    station_code: 71,
    name: "Malcolm Parker",
    url: "https://picsum.photos/200",
  };
  return (
    <div>
      <Navbar user={mockUser} />
      <SecondaryNavigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
