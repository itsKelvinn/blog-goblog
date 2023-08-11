import Blogs from "@/components/Blogs";
import Image from "next/image";
const Home = () => {

  return ( 
    <>  
      <div className="w-full p-20">
        <p className="font-bold text-3xl text-center mb-4">Yo, check it out! We’ve got some sweet reads right here 📖😎</p>
        <p className="text-center ">
          Bloggoblog is a blog website where users can share their thoughts, ideas, and experiences with others. With its user-friendly interface and easy-to-use features, Bloggoblog makes it simple for anyone to create and publish their own blog posts. Whether you’re a seasoned blogger or just starting out, Bloggoblog is the perfect platform for expressing yourself and connecting with others who share your interests.
        </p>
      </div>
      <div className="w-full">
        
          <Blogs/>
        
      </div>
    </>
  );
}
 
export default Home;