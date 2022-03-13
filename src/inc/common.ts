import dayjs from "dayjs";
import { MouseEventHandler } from "react";

export const rides_endpoint = "https://assessment.api.vweb.app/rides";
export const user_endpoint = "https://assessment.api.vweb.app/user";

var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const formatDate = (date) => dayjs(date).format("Do MMM YYYY HH:mm");

export const listInputActions = (
  handleChange: MouseEventHandler<HTMLInputElement>
) => {
  const onChange = (event) => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    handleChange(event);
  };

  const clear = (e) => {
    e.target.value = "";
  };

  return {
    onChange,
    onClick: clear,
    onFocus: clear,
  };
};
