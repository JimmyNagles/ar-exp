import React from "react";
import Link from "next/link";

const BarCodeCard = ({
  name = "california ",
  location = "California Street ",
  image = "/californiaSt.png",
  id = 1,
}) => {
  return (
    <div className=" p-2 text-black w-[300px] h-[400px] rounded-2xl  hover:bg-black   border flex flex-col justify-center items-center shadow-inner bg-opacity-0 hover:text-white hover:bg-opacity-80 hover:shadow-2xl transition-all duration-1000 ease-in ">
      <img className="w-[200px] h-[200px]" src={image}></img>
      <h2 className="p-2 text-md mt-2 ">{name}</h2>
      <h1 className="p-2 text-md mt-2 ">{location}</h1>

      <Link href={` /location/${id}`}>{id}</Link>
    </div>
  );
};

export default BarCodeCard;
