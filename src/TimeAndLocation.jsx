
import React from "react";
import getFormatedData from "./weatherservice";
import { getFormatedTime } from "./weatherservice";

function TimeAndLocation({
  weather: { dt, timezone, name, country, details },
}) {
  return (
    <div className="flex flex-col items-center mt-4 text-xl font-medium text-white">
      <div className="p-2">{getFormatedTime(dt, timezone)}</div>
      <div className="p-2"> {`${name},${country}`} </div>
      <div className="p-2"> {`${details}`} </div>
    </div>
  );
}

export default TimeAndLocation;
