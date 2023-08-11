import React from "react";
import Header from "./Header";
import Search from "./Search";
import TimeAndLocation from "./TimeAndLocation";
import WeatherData from "./WeatherData";

function demo() {
  return (
    <div className="max-w-screen-md p-2 m-auto mt-6 bg-gradient-to-br from-blue-700 to-slate-300">
      <Header />

      <Search />
      <TimeAndLocation />
      <WeatherData />
    </div>
  );
}

export default demo;
