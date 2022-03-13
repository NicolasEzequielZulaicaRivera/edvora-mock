import Image from "next/image";
import { rideType } from "../../inc/types";
import KeyValueSection from "../common/KeyValueSection";
import styles from "./Rides.module.scss";

type RideCardProps = {
  ride: rideType;
};
const RideCard = ({ ride }: RideCardProps) => {
  return (
    <div className={styles.RideCard}>
      <Image
        className={styles.image}
        src={ride?.map_url}
        alt={`ride ${ride?.id} map`}
        width="296px"
        height="148px"
      />
      <KeyValueSection
        data={[
          { key: "Ride Id : ", value: ride?.id },
          { key: "Origin Station : ", value: ride?.origin_station_code },
          { key: "Station Path : ", value: JSON.stringify(ride?.station_path) },
          { key: "Date : ", value: ride?.date },
          { key: "Distance : ", value: ride?.distance },
        ]}
        className={styles.keyValueSection}
        styles={styles}
      />
      <div className={styles.details}>
        <div>{ride?.city}</div>
        <div>{ride?.state}</div>
      </div>
    </div>
  );
};

export default RideCard;
