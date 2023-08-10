import Blogs from "@/components/Blogs";
import Image from "next/image";
const Home = () => {

  return ( 
    <>  
      <div className="w-full p-10">
        <Image className="mb-5" src="/assets/blog-goblog-logo.svg" width={300} height={50}/>
        <p className="text-center ">
          Bloggoblog is a blog website where users can share their thoughts, ideas, and experiences with others. With its user-friendly interface and easy-to-use features, Bloggoblog makes it simple for anyone to create and publish their own blog posts. Whether you’re a seasoned blogger or just starting out, Bloggoblog is the perfect platform for expressing yourself and connecting with others who share your interests.
        </p>
      </div>
      <div className="w-full">
        <div className="flex gap-3 py-3 flex-wrap w-full">
          <Blogs/>
        </div>
      </div>
    </>
  );
}
 
export default Home;