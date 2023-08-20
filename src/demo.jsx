import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import TimeAndLocation from "./TimeAndLocation";
import WeatherData from "./WeatherData";
import getFormatedData from "./weatherservice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Demo() {
  const [query, setQuery] = new useState({ q: "Dhaka" });
  const [units, setUnits] = new useState("metric");
  const [weather, setWeather] = new useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const mess1 = query.q ? query.q : "Current Place";
      toast.warn(" Fetchig weather for-" + mess1);
      try {
        await getFormatedData({ ...query, units }).then((x) => {
          toast.info(`Successful for-${x.name},${x.country}  `);
          setWeather(x);
        });
      } catch (error) {
        console.log("Error form Demo fetch", error);
      }
    };
    fetchdata();
  }, [query, units]);

  console.log("Demo Weather=", weather);

  const formateBackground = () => {
    if (!weather) return " from-cyan-700 to-gray-300";
    const thrushold = units === "metric" ? 20 : 60;
    if (weather.temp <= thrushold) return "from-blue-700 to-slate-100";
    return "from-yellow-700 to-blue-300";
  };
  const notify = () => toast("fuck your");
  return (
    <div
      className={`max-w-screen-md p-2 m-auto mt-6 bg-gradient-to-br ${formateBackground()}`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        draggable
        theme="colored"
        pauseOnHover={false}
      />
      <Header setQuery={setQuery} />
      <Search setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <WeatherData weather={weather} />
        </div>
      )}
    </div>
  );
}

export default Demo;
