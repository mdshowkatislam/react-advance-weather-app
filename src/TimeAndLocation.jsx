
import React from "react";

function TimeAndLocation({ weather: { dt, timezoe, name, country, details } }) {
  return (
    <div className="flex flex-col items-center mt-4 text-xl font-medium text-white">
      <div className="p-2">
        {`${dt}`} | {`${timezoe}`}
      </div>
      <div className="p-2"> {`${name},${country}`} </div>
      <div className="p-2"> {`${details}`} </div>
    </div>
  );
}

export default TimeAndLocation;
