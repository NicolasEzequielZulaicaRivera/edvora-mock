import { userType } from "../../inc/types";

const user: userType = {
  station_code: 49,
  name: "Nicholas Dennis",
  url: "https://picsum.photos/200",
};

export default function handler(req, res) {
  res.status(200).json(user);
}
