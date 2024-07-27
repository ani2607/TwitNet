import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquare } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { CgMoreO } from "react-icons/cg";

interface navOptions {
    name : string,
    icon : React.ReactNode
}

const options : navOptions[] = [
    {
        name : "Home",
        icon : <BiSolidHome size={24} />
    },
    {
        name : "Explore",
        icon : <BiSearch size={24} />
    },
    {
        name : "Notifications",
        icon : <IoNotificationsOutline size={24} />
    },
    {
        name : "Messages",
        icon : <BiMessageSquare size={24}  />
    },
    {
        name : "Profile",
        icon : <IoIosContact size={24} />
    },
    {
        name : 'More',
        icon : <CgMoreO size={24} />
    }
]

const LeftNav = () => {
  return (
    <div className=" text-white">
      <div className="text-3xl h-fit w-fit  p-2 cursor-pointer hover:bg-gray-700/60 rounded-full transition-all  ">
        <BsTwitterX />
      </div>

      <div>
      <ul>
        {options.map((option) => (
          <li key={option.name} className="flex items-center gap-x-4  p-2 cursor-pointer     hover:bg-gray-800/60 rounded-full transition-all">
            {option.icon}
            <span className="text-2xl">{option.name}</span>
          </li>
        ))}
      </ul>

      </div>
      <div className="text-2xl text-center mt-5   p-2 cursor-pointer bg-[#0777c3] hover:bg-sky-500
       rounded-full  ">
        <button className="text-center">Post</button>
      </div>

     

    </div>
  );
};

export default LeftNav;
