import React from 'react'
import { UilSearch } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";

function Search() {
  return (
    <div className="flex items-center justify-around text-2xl text-white">
      <div className="flex items-center space-x-2 ">
        <input
          className="text-black p-2 mt-2 text-xl hover:shadow-xl hover:shadow-slate-400 focus:outline-none capitalize"
          type="search"
          placeholder="search"
        />
        <UilSearch className="transition ease-in-out hover:scale-125" />
      </div>
      <div className="relative flex items-center h-8 rounded-full">
        <UilMapMarker className="absolute inline-flex h-full rounded-full animate-ping hover:animate-none " />
        <UilMapMarker className="inline-flex h-8 rounded-full absoute " />
      </div>

      <div className="flex text-white">
        <button className="p-2 hover:shadow-xl hover:shadow-white hover:rounded-full">
          °C
        </button>
        <span className="p-2 m-auto">|</span>
        <button className="p-2 hover:shadow-xl hover:shadow-white hover:rounded-full">
          °F
        </button>
      </div>
    </div>
  );
}

export default Search