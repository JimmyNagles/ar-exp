import React from "react";
import Link from "next/link";

const BarCodeCard = ({
  name = "california ",
  location = "California Street ",
  image = "/californiaSt.png",
  id = 1,
}) => {
  return (
    <div className=" p-2 text-black w-[300px] h-[400px] rounded-2xl  hover:bg-black  backdrop-blur-sm hover:backdrop-blur-lg    flex flex-col justify-center hover:shadow-black items-center   bg-opacity-0 hover:text-white hover:bg-opacity-80 hover:shadow-2xl transition-all duration-1000 ease-in ">
      <Link href={` /location/${id}`}>
        <h1 className="p-2 absolute top-2 right-2 bg-black text-white text-xs rounded-md bg-opacity-50 transition-all duration-1000 ease-in ">
          More
        </h1>
      </Link>
      <img className="w-[200px] h-[200px]" src={image}></img>
      <h2 className="p-2 text-md mt-2 ">{name}</h2>
      <h1 className="p-2 text-md mt-2 ">{location}</h1>
    </div>
  );
};

export default BarCodeCard;
