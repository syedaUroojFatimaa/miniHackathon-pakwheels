import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function car3() {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-semibold underline">
          Honda City 2024 Price in Pakistan,Images,Reviews & Specs
        </h1>
        <Image
src="/Images/car03.jpeg"
alt="car.pic"
height={400}
            width={400}
          className="block mx-auto mt-6"
        />
        <div className="flex justify-center mt-5 gap-3">
          <button className="flex justify-center bg-blue-600 text-white py-1 px-3 text-base rounded justify-items-center mt-7 ">
            book a test drive
          </button>
          <button className="flex justify-center bg-white text-blue-600 py-1 px-3 text-base rounded justify-items-center border mt-7 border-blue-600 ">
            Request Bank Finance
          </button>
          <button className="flex justify-center bg-white text-blue-600 py-1 px-3 text-base rounded justify-items-center border border-blue-600 mt-7">
            Visit Place
          </button>
          <button className="flex justify-center bg-white text-blue-600 py-1 px-3 text-base rounded justify-items-center border border-blue-600 mt-7">
            Car Inspection
          </button>
        </div>

        <div className="mt-6">
          <h1 className="text-center text-4xl">Vehicle Description</h1>
          <br />
          <div className="text-center flex flex-wrap justify-center gap-5">
            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Numbers of Doors</h1>
              <span className="text-xl">4</span>
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Engine</h1>
              <span className="text-xl">1498 CC</span>
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Condition</h1>
              <span className="text-xl">8.5 / 10</span>
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Driven</h1>
              <span className="text-xl">9,500 KM</span>
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Suspension Type</h1>
              <span className="text-xl">Independent</span>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="font-semibold text-xl">Avg</h1>
              <span className="text-xl">17 Km Per Ltr</span>
            </div>

            <div className="flex items-center space-x-2 mb-5">
              <h1 className="font-semibold text-xl">Transmission</h1>
              <span className="text-xl">Manual or Automatic</span>
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <h1 className="font-semibold text-xl">Fuel Type</h1>
              <span className="text-xl">Petrol</span>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-green-600 text-4xl">PKR 49,00,000</h1>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link href="/checkout">
              <button className="text-white text-base bg-blue-600 py-3 px-5 rounded-lg">
                Make Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}
