import { getInitialProps } from "../../common/common";
import Layout from "../../components/Layout/Layout";

export const getServerSideProps = async () => getInitialProps();

export default function UpcomingRides({ initialRides, initialUser }) {
  return (
    <Layout initialRides={initialRides} initialUser={initialUser}>
      <div>UpcomingRides</div>
    </Layout>
  );
}
