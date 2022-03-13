import dayjs from "dayjs";

export const rides_endpoint = "https://assessment.api.vweb.app/rides";
export const user_endpoint = "https://assessment.api.vweb.app/user";

var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const formatDate = (date) => dayjs(date).format("Do MMM YYYY HH:mm");
