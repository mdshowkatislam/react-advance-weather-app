import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import TimeAndLocation from "./TimeAndLocation";
import WeatherData from "./WeatherData";
import getFormatedData from "./weatherservice";

function Demo() {
  const [query, setQuery] = new useState({ q: "Dhaka" });
  const [units, setUnits] = new useState("metric");
  const [weather, setWeather] = new useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        await getFormatedData(query, units).then((x) => setWeather(x));
      } catch (error) {
        console.log("Error form Demo fetch", error);
      }
    };
    fetchdata();
  }, []);
  console.log("Demo Weather=", weather);

  return (
    <div className="max-w-screen-md p-2 m-auto mt-6 bg-gradient-to-br from-blue-700 to-slate-300">
      <Header />

      <Search />
      {weather ? (
        <TimeAndLocation weather={weather} />
      ) : (
        <div>Loading 1...</div>
      )}
      {weather ? <WeatherData weather={weather} /> : <div> Loading 2....</div>}
    </div>
  );
}

export default Demo;
