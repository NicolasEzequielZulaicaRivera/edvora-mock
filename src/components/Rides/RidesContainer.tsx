import { rideType } from "../../common/common";
import RideCard from "./RideCard";

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
    <div>
      {rides?.map((ride, i) => (
        <RideCard key={ride?.id ?? i} ride={ride} />
      )) ?? <Loading />}
    </div>
  );
};

export default RidesContainer;
