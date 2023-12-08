"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { DataArrMia, DataArrSF } from "@/lib/cities";

interface LocationData {
  id: number;
  name: string;
  image: string;
  location: string;
  lat: number;
  long: number;
  link: string;
  foundProof?: string;
}

export default function LocationCityPage({
  params,
}: {
  params: { city: string; locationId: string };
}) {
  const [locationData, setLocationData] = useState<LocationData | null>();

  useEffect(() => {
    // Choose the correct city data array
    const cityData = params.city === "SanFrancisco" ? DataArrSF : DataArrMia;

    // Find the location in the chosen city data array
    const locationInfo = cityData.find(
      (loc) => loc.id.toString() === params.locationId
    );

    console.log(locationInfo);

    setLocationData(locationInfo);

    if (!locationInfo) {
      return;
    }
    // Update the state with the found location
  }, [params]);

  const handleLocationClick = (url: string) => {
    window.open(url, "_blank");
  };

  const HandleSubmit = () => {
    alert("still working on this!");
    console.log("uploads img");
    console.log("collects user name");

    console.log("check img is correct 3d model with vision ");

    console.log("uploads img to db and page if it is");
    console.log("updates page with user name and picture of actual 3d exp");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="mb-8 text-2xl ">
        <h1>
          AR {params.city} Location {params.locationId}
        </h1>
      </div>
      <div className="grid grid-rows-4 gap-4">
        {locationData && (
          <div>
            {locationData ? (
              locationData.foundProof ? (
                <div>
                  <h1 className="p-2  w-full h-[50px] text-white shadow-inner shadow-gray-200   text-xs rounded-md  transition-all duration-1000 ease-in bg-green-800 hover:bg-black hover:text-white ">
                    FOUND
                  </h1>
                  <Image
                    src={locationData.foundProof}
                    alt={locationData.name}
                    width={500}
                    height={200}
                  />
                </div>
              ) : (
                <h1> NOT FOUND YET</h1>
              )
            ) : (
              // Optionally, you can handle the case where locationData is null or undefined
              <h1>Loading...</h1>
            )}

            <div>
              <h2>{locationData.name}</h2>
              <h2>{locationData.lat}</h2>
              <h2>{locationData.long}</h2>
              <h2>{locationData.location}</h2>
            </div>

            <div>
              <button
                onClick={() => handleLocationClick(locationData.link)}
                className="p-2 w-full h-[50px] shadow-inner shadow-gray-200 text-black  text-xs rounded-md  transition-all duration-1000 ease-in hover:bg-black hover:text-white "
              >
                Trigger AR Location
              </button>
            </div>
            <div>
              <Image
                src={locationData.image}
                alt={locationData.name}
                width={500}
                height={300}
              />
            </div>

            <div>
              <button
                onClick={() => HandleSubmit()}
                className="p-2 mt-8 w-full h-[50px] shadow-inner shadow-gray-200 text-black  text-xs rounded-md  transition-all duration-1000 ease-in hover:bg-black hover:text-white "
              >
                Found it
              </button>
            </div>

            {/* Render more details as needed */}
          </div>
        )}
      </div>
    </main>
  );
}
