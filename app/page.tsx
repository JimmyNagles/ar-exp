"use client";
import Image from "next/image";

import BarCodeCard from "../components/BarCodeCard";
export default function Home() {
  const DataArr = [
    {
      id: 4,
      name: "Coit Tower",
      image: "/CoitTower.png",
      location: "Coit Tower, SF",
    },
    { id: 2, name: "Church", image: "/church.png", location: "Church, SF" },

    {
      id: 7,
      name: "Lombard Street",
      image: "/Lombard.png",
      location: "Lombard Street, SF",
    },
    {
      id: 1,
      name: "California Street",
      image: "/californiaSt.png",
      location: "California Street, SF",
    },
    {
      id: 5,
      name: "Embarcadero Pier",
      image: "/embercaderopier.png",
      location: "Embarcadero Pier, SF",
    },
    {
      id: 10,
      name: "Union Square",
      image: "/unionSquare.png",
      location: "Union Square, SF",
    },
    {
      id: 3,
      name: "City Hall",
      image: "/cityHall.png",
      location: "City Hall, SF",
    },

    {
      id: 8,
      name: "Painted Ladies",
      image: "/PaintedLadies.png",
      location: "Painted Ladies, SF",
    },
    {
      id: 9,
      name: "Palace of Fine Arts",
      image: "/PalaceOfFineArts.png",
      location: "Palace of Fine Arts, SF",
    },
    {
      id: 6,
      name: "Golden Gate Bridge",
      image: "/GoldenGateBridge.png",
      location: "Golden Gate Bridge, SF",
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
            id={index + 1}
          ></BarCodeCard>
        ))}
      </div>
    </main>
  );
}
