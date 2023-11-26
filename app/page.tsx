"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BarCodeCard from "../components/BarCodeCard";
import LocationAggregatorMap from "../components/MapBox";
export default function Home() {
  const [details, setDetails] = useState([]);
  const [coordinates, setCoordinates] = useState<number[][]>([]);

  const DataArrSF = [
    {
      id: 1,
      name: "Coit Tower",
      image: "/CoitTower.png",
      location: "Coit Tower, SF",
      lat: 37.80272756,
      long: -122.4059314,
      link: "https://adobeaero.app.link/pY6sifmsOEb",
    },
    {
      id: 2,
      name: "Church",
      image: "/church.png",
      location: "Church, SF",
      lat: 37.80119477,
      long: -122.4101185,
      link: "https://adobeaero.app.link/FISkWvfwOEb",
    },

    {
      id: 3,
      name: "Lombard Street",
      image: "/Lombard.png",
      location: "Lombard Street, SF",
      lat: 37.80199093,
      long: -122.419579,
      link: "https://adobeaero.app.link/2MvkSbZtOEb",
    },
    {
      id: 4,
      name: "California Street",
      image: "/californiaSt.png",
      location: "California Street, SF",
      lat: 37.7924764,
      long: -122.4058415,
      link: "https://adobeaero.app.link/MCDmcYIwOEb",
    },
    {
      id: 5,
      name: "Embarcadero Pier",
      image: "/embercaderopier.png",
      location: "Embarcadero Pier, SF",
      lat: 37.79879812,
      long: -122.3966105,
      link: "https://adobeaero.app.link/cUF9qCTvOEb",
    },
    {
      id: 6,
      name: "Union Square",
      image: "/unionSquare.png",
      location: "Union Square, SF",
      lat: 37.78817062,
      long: -122.4082332,
      link: "https://adobeaero.app.link/VNEzkmJqOEb",
    },
    {
      id: 7,
      name: "City Hall",
      image: "/cityHall.png",
      location: "City Hall, SF",
      lat: 37.77946626,
      long: -122.41772,
      link: "https://adobeaero.app.link/0TePoZkrOEb",
    },

    {
      id: 8,
      name: "Painted Ladies",
      image: "/PaintedLadies.png",
      location: "Painted Ladies, SF",
      lat: 37.77601302,
      long: -122.4332468,
      link: "https://adobeaero.app.link/xC4KiMWuOEb",
    },
    {
      id: 9,
      name: "Palace of Fine Arts",
      image: "/PalaceOfFineArts.png",
      location: "Palace of Fine Arts, SF",
      lat: 37.80211342,
      long: -122.4472328,
      link: "https://adobeaero.app.link/XtSkHtovOEb",
    },
    {
      id: 10,
      name: "Golden Gate Bridge",
      image: "/GoldenGateBridge.png",
      location: "Golden Gate Bridge, SF",
      lat: 37.80865059,
      long: -122.4754883,
      link: "https://adobeaero.app.link/pmIhoCBtOEb",
    },
  ];

  useEffect(() => {
    // Create an array of geo coordinates pairs
    const coords = DataArrSF.map((item) => [item.long, item.lat]);

    console.log(coords);
    setCoordinates(coords);

    console.log(coordinates);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-zinc-950   ">
      <div className="p-2 min-h-[50vh]">
        <LocationAggregatorMap data={coordinates} />
      </div>

      <div className="shadow-inner rounded-2xl  min-h-screen w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-items-center lg:grid-cols-3 gap-4 shadow-2xl rounded-2xl shadow-grey-400 p-5">
          {DataArrSF.map((item, index) => (
            <BarCodeCard
              key={index}
              image={item.image}
              name={item.name}
              location={item.location}
              id={index + 1}
            ></BarCodeCard>
          ))}
        </div>
      </div>
    </main>
  );
}
