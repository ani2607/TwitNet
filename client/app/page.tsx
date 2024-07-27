
import LeftNav from "@/components/LeftNav";

import RightNav from "@/components/RightNav";

import Post from "@/ui/Post";



export default function Home() {
  return (
    <main className="">

      <div className="grid grid-cols-12 h-screen w-screen px-56">

          <div className="  col1 col-span-3 flex justify-start pt-6 ">
            <LeftNav/>
          </div>
          <div className="col2     col-span-7 border-r-2 border-l-2   border-r-gray-700 border-l-gray-700 overflow-y-scroll   no-scrollbar     ">

          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Aniket"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Aniket"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />
          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />

          <Post
          
          profilePic = "https://avatars.githubusercontent.com/u/136100597?v=4"
          username = "Rahul"
          handle = "rahul"
          timestamp = "1 day ago"
          text = "Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post.Hello, this is my first post "
          
          />

          </div>

          <div className="col3 col-span-2 ">

            <RightNav/>
          </div>
      </div>
      
    </main>
  );
}
