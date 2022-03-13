import { useContext } from "react";
import { getInitialProps } from "../../inc/server";
import RidesContext from "../../inc/RidesContext";
import Layout from "../../components/Layout/Layout";
import RidesContainer from "../../components/Rides/RidesContainer";

export const getServerSideProps = async () => getInitialProps();

export default function NearestRides({ initialRides, initialUser }) {
  const [{ nearest }] = useContext(RidesContext);

  return (
    <Layout initialRides={initialRides} initialUser={initialUser}>
      <RidesContainer rides={nearest} />
    </Layout>
  );
}
