import dayjs from "dayjs";

export const rides_endpoint = "/api/rides";
export const user_endpoint = "/api/user";

var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const formatDate = (date) => dayjs(date).format("Do MMM YYYY HH:mm");
