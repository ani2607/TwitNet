import { PostInterface } from "@/commonTypes/PostInteface";
import Image from "next/image";
import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FiShare } from "react-icons/fi";

const Post = ({
  profilePic,
  username,
  handle,
  timestamp,
  text,
}: PostInterface) => {
  return (
    <div className="border border-b-0 border-r-0 border-l-0  border-t-gray-500  text-white hover:bg-gray-900/40 cursor-pointer shadow-lg">
      <div className="flex items-start gap-x-3 gap-1 p-2 ">
        <div>
          <Image
            src={profilePic}
            alt={`${username}'s profile`}
            className="rounded-full"
            width={50}
            height={50}
          />
        </div>

        <div className="w-full ml-2">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold">{username}</span>{" "}
             
            </div>
          </div>

          <div className="mt-1 text-white">
            <p>{text}</p>
          </div>

          <div className="flex justify-between  mt-2 text-gray-500">
            <button className="  hover:text-blue-400  ">
              <FaRegComment size={18} />
              
            </button>
            <button className=" hover:text-green-400">
              <FaRetweet size={18} />
              
            </button>
            <button className=" hover:text-red-400">
              <GoHeart size={18} />
             
            </button>
            <button className=" hover:text-blue-400">
              <FiShare size={18} />
            
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
