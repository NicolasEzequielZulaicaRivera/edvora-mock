import { rideType } from "../../inc/types";
import RideCard from "./RideCard";
import styles from "./Rides.module.scss";

type RidesContainerProps = {
  rides: rideType[];
};

const Loading = () => {
  return (
    <div>
      <div>Loading...</div>
    </div>
  );
};

const RidesContainer = ({ rides }: RidesContainerProps) => {
  return (
    <div className={styles.RidesContainer}>
      {rides?.map((ride, i) => (
        <RideCard key={i + " " + ride?.id} ride={ride} />
      )) ?? <Loading />}
    </div>
  );
};

export default RidesContainer;
