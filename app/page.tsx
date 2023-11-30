"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BarCodeCard from "../components/BarCodeCard";
import LocationAggregatorMap from "../components/MapBox";
import { DataArrSF, DataArrMia } from "../lib/data";

interface LocationData {
  position: number[];
  name: string;
  location: string;
}
export default function Home() {
  const [coordinates, setCoordinates] = useState<LocationData[]>([]);

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
      <div className="p-2 min-h-[50vh]">
        <LocationAggregatorMap data={coordinates} />
      </div>

      <div className="  min-h-screen  w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-items-center lg:grid-cols-3 gap-4  p-5 ">
          {DataArrMia.map((item, index) => (
            <BarCodeCard
              key={index}
              image={item.image}
              name={item.name}
              location={item.location}
              id={index + 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
