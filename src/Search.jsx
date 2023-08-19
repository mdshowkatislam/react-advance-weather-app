import React from 'react'
import { UilSearch } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Search({ setQuery, units, setUnits }) {
  const [city, setCity] = React.useState("");

  const searchHandle = (e) => {
    city !== "" && setQuery({ q: city });
  };

  const locationHandle = () => {
    if (navigator.geolocation) {
      toast.info("--fetchig for user inpurt");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("##fetchig done for input");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };
  const tempHandle = (e) => {
    let x = e.currentTarget.name;
    if (units !== x) setUnits(x);
  };
  return (
    <div className="flex items-center justify-around text-2xl text-white">
      <div className="flex items-center space-x-2 ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="p-2 mt-2 text-xl text-black capitalize hover:shadow-xl hover:shadow-slate-400 focus:outline-none"
          type="search"
          placeholder="search"
        />
        <UilSearch
          onClick={searchHandle}
          className="transition ease-in-out hover:scale-125"
        />
      </div>
      <div className="relative flex items-center h-8 rounded-full">
        <UilMapMarker
          onClick={locationHandle}
          className="absolute inline-flex h-full rounded-full animate-ping hover:animate-none "
        />
        <UilMapMarker className="inline-flex h-8 rounded-full absoute " />
      </div>

      <div className="flex text-white">
        <button
          name="metric"
          onClick={tempHandle}
          className="p-2 hover:shadow-xl hover:shadow-white hover:rounded-full"
        >
          °C
        </button>
        <span className="p-2 m-auto">|</span>
        <button
          name="imperial"
          onClick={tempHandle}
          className="p-2 hover:shadow-xl hover:shadow-white hover:rounded-full"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Search