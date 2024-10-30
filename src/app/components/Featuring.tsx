import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscStarFull } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";


export default function Featuring() {
  return (
    <div>
      <div>
        <br />
        <div className="text-3xl text-black font-semibold ml-4">
          Featured New Cars
        </div>
        <br />
        <div className="flex justify-between items-center ml-4 mr-4">
          <ul className="flex space-x-4 ml-4">
            <li>
              <Link href="/popular" className="hover:underline">
                Popular
              </Link>
            </li>
            <li>
              <a href="/Upcoming" className="hover:underline">
                Upcoming
              </a>
            </li>
            <li>
              <Link href="/newlylaunched" className="hover:underline">
                Newly Launched
              </Link>
            </li>
          </ul>
          <div>
            <a href="#ViewAllCars" className="hover:underline text-blue-600">
              View All Cars
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center m-4 p-4 gap-4">
          <div className="flex w-full justify-between gap-4">
            <Link href="./cars/car1" className='text-center w-3/12 px-3 bg-white'>
              <div className="bg-white border border-gray-200 shadow-md rounded-lg">
                <Image
                          src="/Images/car1.jpg"
                  alt="Toyota Corolla"
                  width={400} height={400}
                />
                <br />
                <h1 className="text-center text-xl text-blue-600">
                  Toyota Corolla
                </h1>
                <p className="text-center text-lg text-green-500">
                  PKR 59.7 - 75.5 Lacs
                </p>
                <br />
                <p className="flex justify-center items-center">
                  <VscStarFull className="text-orange-500" />{" "}
                  <VscStarFull className="text-orange-500" />{" "}
                  <VscStarFull className="text-orange-500" />{" "}
                  <VscStarEmpty className="text-orange-500" />{" "}
                  <VscStarEmpty className="text-orange-500" />{" "}
                  <span className="ml-2">621 Reviews</span>
                </p>
              </div>
            </Link>

          <Link href="./cars/car2" className='text-center w-3/12 px-3 bg-white'>
            <div className="bg-white border border-gray-200 shadow-md rounded-lg">
              <Image
                        src="/Images/car2.jpeg"
                alt="Suzuki Alto"
                width={400} height={400}

              />
              <br />
              <h1 className="text-center text-xl text-blue-600">Suzuki Alto</h1>
              <p className="text-center text-lg text-green-500">
                PKR 23.3 - 30.5 Lacs
              </p>
              <br />
              <p className="flex justify-center items-center">
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <span className="ml-2">199 Reviews</span>
              </p>
            </div>
            </Link>
            <Link href="./cars/car3" className='text-center w-3/12 px-3 bg-white'>

            <div className="bg-white border border-gray-200 shadow-md rounded-lg">
              <Image
                        src="/Images/car3.jpg"
                alt="Honda City"
                width={350} height={350}
              />
              <br />
              <h1 className="text-center text-xl text-blue-600">Honda City</h1>
              <p className="text-center text-lg text-green-500">
                PKR 46.5 - 58.5 Lacs
              </p>
              <br />
              <p className="flex justify-center items-center">
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <span className="ml-2">458 Reviews</span>
              </p>
            </div>

            </Link>

          <Link href="./cars/car4" className='text-center w-3/12 px-3 bg-white'>

            <div className="bg-white border border-gray-200 shadow-md rounded-lg">
              <Image
                        src="/Images/car4.jpeg"

                alt="Toyota Civic"
                width={350} height={350}
              />
              <br />
              <h1 className="text-center text-xl text-blue-600">
                Toyota Civic
              </h1>
              <p className="text-center text-lg text-green-500">
                PKR 86.6 - 99.0 Lacs
              </p>
              <br />
              <p className="flex justify-center items-center">
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarFull className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <VscStarEmpty className="text-orange-500" />{" "}
                <span className="ml-2">357 Reviews</span>
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
