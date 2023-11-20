"use client";
import Image from "next/image";

export default function LocationPage({
  params,
}: {
  params: { LocationId: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="mb-8 text-2xl ">
        <h1>AR Location page!</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <h1>{params.LocationId}</h1>
      </div>
    </main>
  );
}
