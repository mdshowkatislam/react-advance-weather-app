import React from 'react'

function Header({ setQuery }) {
  const citys = [
    {
      id: 1,
      name: "Dhaka",
    },
    {
      id: 2,
      name: "Australia",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "New York",
    },
    {
      id: 5,
      name: "Singapur",
    },
  ];

  return (
    <div className="flex justify-around text-xl text-white ">
      {citys.map((item, index) => (
        <button
          onClick={() => setQuery({ q: item.name })}
          className="w-full p-2 mt-4 hover:shadow-xl hover:shadow-white"
          keys={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Header