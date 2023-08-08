import Blogs from "@/components/Blogs";
const Home = () => {

  return ( 
    <>  
      <div className="w-full p-10">
        <h1 className="font-bold text-center text-4xl mb-4">Blog GoBlog</h1>
        <p className="text-center">
          Bloggoblog is a blog website where users can share their thoughts, ideas, and experiences with others. With its user-friendly interface and easy-to-use features, Bloggoblog makes it simple for anyone to create and publish their own blog posts. Whether you’re a seasoned blogger or just starting out, Bloggoblog is the perfect platform for expressing yourself and connecting with others who share your interests.
        </p>
      </div>
      <div className="w-full">
        <div className="w-full">
          <h1 className="font-bold text-xl">Blogs</h1> 
        </div>
        <div className="flex flex-col gap-3 py-3">
          <Blogs/>
        </div>
      </div>
    </>
  );
}
 
export default Home;