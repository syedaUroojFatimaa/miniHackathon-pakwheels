import { FaMobileAlt } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-950">
      <hr className="border-t border-white my-2"></hr>
      <p className="text-white px-2 flex items-center">
        <FaMobileAlt className="text-red-600 h-6 w-6" />
        Download App Via SMS
        <span className="ml-auto text-red-500">اردو </span>
        <span className="ml-2">| Sign In </span>
        <span className="ml-2">| Sign Up </span>
      </p>
      <hr className="border-t border-gray-600 my-2"></hr>
      <div className="flex text-white ">
        <Image src="/Images/logo.png" alt="PakWheels Logo" width={170}
            height={100} />
        <span className="ml-28 py-8 flex items-center justify-between">
          Used Cars <VscTriangleDown />
        </span>
        <span className="ml-9 py-8 flex items-center justify-between">
          New Cars <VscTriangleDown />
        </span>
        <span className="ml-9 py-8 flex items-center justify-between">
          Bikes <VscTriangleDown />
        </span>
        <span className="ml-9 py-8 flex items-center ">
          Auto Store <VscTriangleDown />
        </span>
        <span className="ml-9 py-8">Videos</span>
        <span className="ml-9 py-8">Forums</span>
        <span className="ml-9 py-8">Blog</span>
        <span className="ml-9 py-8 flex items-center">
          More <VscTriangleDown />
        </span>
        <button className="ml-28 py-8 text-white flex items-center">
          Post an AD <VscTriangleDown />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
