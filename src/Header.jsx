import React from 'react'

function Header() {
  const citys = [
    {
      id: 1,
      name: "Dhaka",
    },
    {
      id: 2,
      name: "Dilhi",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Beijing",
    },
    {
      id: 5,
      name: "Singapur",
    },
  ];

  return (
    <div className=" flex justify-around text-white text-xl">
      {citys.map((item, index) => (
        <button
          className="p-2 w-full hover:shadow-xl hover:shadow-white mt-4"
          keys={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Header