import Blogs from "@/components/Blogs";
const Home = () => {

  return ( 
    <>  
      <div className="flex flex-col my-8">
        <h1 className="text-5xl text-center font-bold mb-2">Our Blogs</h1>
        <p>A center for all our resources & insigths</p>
      </div>
      <div className="w-full">
          <Blogs/>
      </div>
    </>
  );
}
 
export default Home;