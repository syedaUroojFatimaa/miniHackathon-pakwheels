import React from "react";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-mono text-center uppercase mb-4">
          Enter Your Details
        </h1>
        <div className="bg-white border border-gray-300 shadow-md rounded p-12 w-10/12 max-w-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Enter your Name"
            />
            <input
              type="email"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Enter your Email"
            />
            <input
              type="text"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Enter your Card Number"
            />
            <input
              type="text"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Enter your Address"
            />
<Link href="/thank-you">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md self-center mt-4">
              Place Your Order
            </button>
            </Link>
          </form>
        </div>
      </div>
      <br/>
    </div>
  );
}
