import { rideType } from "../../common/common";

type RideCardProps = {
  ride: rideType;
};
const RideCard = ({ ride }: RideCardProps) => {
  return (
    <div>
      <div>IMG</div>
      {/* TODO: make key-value section */}
      <div>
        <div>
          <span>Ride Id</span> {ride?.id}
        </div>
        <div>
          <span>Origin Station</span> {ride?.origin_station_code}
        </div>
        <div>
          <span>Station Path</span> {JSON.stringify(ride?.station_path)}
        </div>
        <div>
          <span>Date</span> {ride?.date}
        </div>
        <div>
          <span>Distance</span> {ride?.distance}
        </div>
      </div>
      <div>
        <div>City Name</div>
        <div>State Name</div>
      </div>
    </div>
  );
};

export default RideCard;
