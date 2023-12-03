"use client";
import LocationAggregatorMap from "@/components/MapBox";
import React, { useState, useEffect } from "react";
import { DataArrSF } from "../../../lib/cities";
import Image from "next/image";
import BarCodeCard from "@/components/BarCodeCard";

interface LocationData {
  position: number[];
  name: string;
  location: string;
}
export default function LocationCityPage({
  params,
}: {
  params: { LocationId: string };
}) {
  const [coordinates, setCoordinates] = useState<LocationData[]>([]);

  const cityViewState = {
    longitude: -122.41669, // Longitude for San Francisco
    latitude: 37.774929, // Latitude for San Francisco
    zoom: 12, // Initial zoom level
    pitch: 40.5, // Pitch of the map view
    bearing: -27, // Bearing of the map view
    minZoom: 5, // Minimum zoom level
    maxZoom: 15, // Maximum zoom level
  };

  useEffect(() => {
    // Create an array of geo coordinates pairs
    const coords = DataArrSF.map((item) => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="mb-8 text-2xl "></div>
      <div className="grid grid-cols-3 gap-4">
        <h1>{params.LocationId}</h1>
      </div>

      <div className="p-2 min-h-[50vh]">
        <LocationAggregatorMap
          initalViewStateProp={cityViewState}
          data={coordinates}
        />
      </div>

      <div className="  min-h-screen  w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-items-center lg:grid-cols-3 gap-4  p-5 ">
          {DataArrSF.map((item, index) => (
            <BarCodeCard
              key={index}
              image={item.image}
              name={item.name}
              location={item.location}
              id={index + 1}
              cityId="SanFrancisco"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
