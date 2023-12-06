"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BarCodeCard from "../components/BarCodeCard";
import LocationAggregatorMap from "../components/MapBox";
import { DataArrSF, DataArrMia } from "../lib/data";
import Link from "next/link";

interface LocationData {
  position: number[];
  name: string;
  location: string;
}
export default function Home() {
  const [coordinates, setCoordinates] = useState<LocationData[]>([]);

  const cityViewState = {
    longitude: -80.189194,
    latitude: 25.820882,
    zoom: 12,
    minZoom: 5,
    maxZoom: 15,
    pitch: 40.5,
    bearing: -27,
  };
  useEffect(() => {
    // Create an array of geo coordinates pairs
    const coords = DataArrMia.map((item) => {
      return {
        position: [item.long, item.lat],
        // Include other properties you might need for the tooltip
        name: item.name,
        location: item.location,
      };
    });
    setCoordinates(coords);

    console.log(coordinates);
  }, []);
  //
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12    ">
      <Link href={` /cities/SanFrancisco`}>
        <h1 className="p-2 absolute z-10 top-2 left-2 shadow-inner shadow-gray-200 text-black  text-xs rounded-md  transition-all duration-1000 ease-in hover:bg-black hover:text-white ">
          San Francisco
        </h1>
      </Link>

      <div className="p-2 min-h-[50vh]">
        <LocationAggregatorMap
          initalViewStateProp={cityViewState}
          data={coordinates}
        />
      </div>

      <div className="  min-h-screen  w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-items-center lg:grid-cols-3 gap-4  p-5 ">
          {DataArrMia.map((item, index) => (
            <BarCodeCard
              key={index}
              image={item.image}
              name={item.name}
              location={item.location}
              id={index}
              cityId="Miami"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
