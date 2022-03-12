import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  const mockUser = {
    station_code: 71,
    name: "Malcolm Parker",
    url: "https://picsum.photos/200",
  };
  return (
    <div>
      <Navbar user={mockUser} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
