"use client";
import Link from "next/link";

export default function CityLocationPage({}: {}) {
  return (
    <main className="flex min-h-[2000px] flex-col items-center justify-between p-24 relative ">
      {/* grid */}
      <div className="grid grid-cols-3 gap-4 items-center min-h-[500px]">
        <Link href={"/cities/SanFrancisco"}>
          <li className="w-[200px] h-[200px] transition-all duration-1000 ease-in shadow-2xl hover:shadow-black flex flex-col justify-center items-center ">
            San Francisco
          </li>
        </Link>
        <Link href={"/cities/Miami"}>
          <li className="w-[200px] h-[200px] transition-all duration-1000 ease-in shadow-2xl hover:shadow-black flex flex-col justify-center items-center ">
            Miami
          </li>
        </Link>
        <li className="w-[200px] h-[200px] transition-all duration-1000 ease-in shadow-2xl hover:shadow-black flex flex-col justify-center items-center ">
          TBA
        </li>
      </div>
      {/* secret */}
      <Link href={"cities/Code:2131241"}>
        <li className="w-[100px] h-[50px] absolute bottom-5 right-10 transition-all duration-1000 ease-in hover:shadow-2xl hover:shadow-black flex flex-col justify-center text-white hover:text-black items-center ">
          Secret
        </li>
      </Link>

      <Link href={"cities/Code:123123"}>
        <li className="w-[100px] h-[50px] absolute top-5 left-10 transition-all duration-1000 ease-in hover:shadow-2xl hover:shadow-black flex flex-col justify-center text-white hover:text-black items-center ">
          Secret
        </li>
      </Link>
    </main>
  );
}
