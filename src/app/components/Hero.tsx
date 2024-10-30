import { FaCheck } from "react-icons/fa6";
import React from "react";

export default function Hero() {
  return (
    <div>
      <br/>
      <div className="text-center gap-2">
        <div className="text-4xl text-black font-semibold">
          Sell Your Car on Pakwheels and Get the best price
          <div className="flex justify-center m-4 h-56">
            <div className="grid grid-cols-2 gap-3 w-full max-w-4xl">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="justify-center items-center mt-3 gap-3">
                  <h1 className="text-center text-xl text-blue-700 font-semibold p-3">
                    Post your AD on PakWheels
                  </h1>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> Post your ad for
                    free in 3 easy steps
                  </p>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> Get Genuine
                    offers from verified Buyers
                  </p>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> Sell your car
                    fast at the best price
                  </p>
                  <button className="bg-red-600 text-base text-white py-1 px-3 rounded-lg hover:bg-red-400 mt-3 gap-3">
                    Post Your AD
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="justify-center items-center mt-3 gap-3">
                  <h1 className="text-center text-xl text-blue-700 font-semibold p-3">
                    Try PakWheels Sell it for me
                  </h1>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> Dedicated sales
                    expert to sell your car
                  </p>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> We bargain for
                    you and share the best offer
                  </p>
                  <p className="text-center text-lg font-thin flex items-center justify-center">
                    <FaCheck className="mr-2 text-green-600" /> We ensure safe &
                    secure transaction
                  </p>
                  <button className="bg-blue-600 text-base text-white py-1 px-3 rounded-lg hover:bg-blue-400 mt-3 gap-3">
                    Register Your Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
