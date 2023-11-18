"use client";
import Image from "next/image";

import BarCodeCard from "../components/BarCodeCard";
export default function Home() {
  const DataArr = [
    {
      name: "California Street",
      image: "/californiaSt.png",
      location: "California Street, SF",
    },
    { name: "Church", image: "/church.png", location: "Church, SF" },
    { name: "City Hall", image: "/cityHall.png", location: "City Hall, SF" },
    { name: "Coit Tower", image: "/CoitTower.png", location: "Coit Tower, SF" },
    {
      name: "Embarcadero Pier",
      image: "/Embercadero.png",
      location: "Embarcadero Pier, SF",
    },
    {
      name: "Golden Gate Bridge",
      image: "/GoldenGateBridge.png",
      location: "Golden Gate Bridge, SF",
    },
    {
      name: "Lombard Street",
      image: "/Lombard.png",
      location: "Lombard Street, SF",
    },
    {
      name: "Painted Ladies",
      image: "/PaintedLadies.png",
      location: "Painted Ladies, SF",
    },
    {
      name: "Palace of Fine Arts",
      image: "/PalaceOfFineArts.png",
      location: "Palace of Fine Arts, SF",
    },
    {
      name: "Union Square",
      image: "/unionSquare.png",
      location: "Union Square, SF",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="mb-8 text-2xl ">
        <h1>AR LOCATIONS!</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {DataArr.map((item, index) => (
          <BarCodeCard
            key={index}
            image={item.image}
            name={item.name}
            location={item.location}
          ></BarCodeCard>
        ))}
      </div>
    </main>
  );
}
