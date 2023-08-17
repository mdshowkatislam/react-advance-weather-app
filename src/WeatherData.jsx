import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./App.css";
import { getFormatedImageUrl } from "./weatherservice";

function WeatherData({
  weather: {
    temp,
    temp_max,
    temp_min,
    sunrise,
    sunset,
    speed,
    humidity,
    icon,
    feels_like,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-around mt-4 ">
        <div className="text-white">
          <img src={`${getFormatedImageUrl(`${icon}`)}`} alt="not found" />
        </div>
        <div className="text-6xl ">{`${temp}`}</div>
        <div className="space-y-2 ">
          <div className="flex space-x-4 text-xl text-red-900">
            <Unicons.UilTemperaturePlus />
            <span>temp:{`${feels_like}`}</span>
          </div>
          <div className="flex space-x-4 text-xl text-blue-900">
            <Unicons.UilTear />
            <span>humidity:{`${humidity}`}</span>
          </div>
          <div className="flex space-x-4 text-xl text-slate-900">
            <Unicons.UilWind />
            <span>wind:{`${speed}`} mph</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around p-2 m-4 space-x-2 text-sky-900">
        <Unicons.UilSun className="text-red-400 " size={30} />
        <span>sunrise:{`${sunrise}`}</span>
        <Unicons.UilSunset className=" text-slate-800" size={30} />
        <span>sunrise:{`${sunset}`}</span>
        <Unicons.UilArrowUp />
        <span>High Temp:{`${temp_max}`}</span>
        <Unicons.UilArrowDown />
        <span>Low Temp:{`${temp_min}`}</span>
      </div>
    </div>
  );
}

export default WeatherData;
