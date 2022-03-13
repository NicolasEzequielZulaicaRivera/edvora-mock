import { useContext } from "react";
import { getInitialProps } from "../../common/common";
import RidesContext from "../../common/RidesContext";
import Layout from "../../components/Layout/Layout";
import RidesContainer from "../../components/Rides/RidesContainer";

export const getServerSideProps = async () => getInitialProps();

export default function PastRides({ initialRides, initialUser }) {
  const [{ past }] = useContext(RidesContext);

  return (
    <Layout initialRides={initialRides} initialUser={initialUser}>
      <RidesContainer rides={past} />
    </Layout>
  );
}
