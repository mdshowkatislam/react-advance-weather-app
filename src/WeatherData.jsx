import React from "react";
import * as Unicons from "@iconscout/react-unicons";

function WeatherData() {
  return (
    <div>
      <div className="flex items-center justify-around mt-4 text-white">
        <div className="text-white">
          <Unicons.UilSun className="text-red-600" size={80} />
        </div>
        <div className="text-6xl ">19°</div>
        <div className="space-y-2 ">
          <div className="flex space-x-4 text-xl text-red-900">
            <Unicons.UilTemperaturePlus />
            <span>temp:19°</span>
          </div>
          <div className="flex space-x-4 text-xl text-blue-900">
            <Unicons.UilTear />
            <span>humidity:19%</span>
          </div>
          <div className="flex space-x-4 text-xl text-slate-900">
            <Unicons.UilWind />
            <span>wind:100 mph</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around space-x-2 text-sky-900 m-4 p-2">
        <Unicons.UilSun className=" text-red-400" size={30} />
        <span>sunrise:4.50am</span>
        <Unicons.UilSunset className=" text-slate-800" size={30} />
        <span>sunrise:6.50pm</span>
        <Unicons.UilArrowUp />
        <span>High Temp:6.50pm</span>
        <Unicons.UilArrowDown />
        <span>Low Temp:6.50pm</span>
      </div>
    </div>
  );
}

export default WeatherData;
