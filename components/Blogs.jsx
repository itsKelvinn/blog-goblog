"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getBlogs } from '@/lib/api';
import SearchBar from './SearchBar';

export default function Posts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);

  const handleBlogSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('nl-NL', options);
    
    // Split the formatted date into parts (day, month, year)
    const [day, month, year] = formattedDate.split(' ');

    // Capitalize the first letter of the month and rejoin the date
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  }


  return (
    <>
      <div className='flex w-full justify-center'>
        <SearchBar onSearch={handleBlogSearch} style={"w-96 h-10 p-2 mb-10 bg-gray-100 border rounded text-sm  border-r-0 rounded-r-none"}/>
      </div>
      
      {blogs.data && (
        <div className='firstblog flex w-full border p-2 border-bg-gray-400 rounded gap-6 mb-2  '>
          <div className='w-7/12'>
            <div className="aspect-ratio-16-9 border rounded">
              <Image
                  src="/assets/blog-default-pic.jpg"
                  alt="blog_default_pic"
                  layout="fill"
                  objectFit="cover"
              />
            </div>
          </div>


          <div className='flex flex-col h-full relative w-500px'>
              <p className='text-3xl font-bold mb-6 mt-5'>{blogs.data[1].blog_title}</p>
              <div className='flex gap-2 mb-4'>
                {blogs.data[2].categories.map(category => (<div className='font-bold text-xs text-white bg-black p-1 px-2 border rounded'>{category.category_title}</div>))}
              </div>
              <p className=''>{blogs.data[0].blog_content.split(' ').slice(0,50).join(' ') + "..."}</p>
              <div className='flex gap-2 absolute bottom-0'>
                <p>{blogs.data[0].user.user_fullname}</p>
                <p>{formatDate(blogs.data[0].created_at)}</p>
              </div>
          </div>
        </div>    
      )}
    

      <div className="w-full grid grid-cols-3 gap-2">
          {/* {console.log(blogs.data[0])} */}
          
  
          {blogs.data?.slice(1).map(blog  => (
              <div key={blog.id} className="border p-2 border-bg-gray-400 rounded relative">
                  
                  <div className="aspect-ratio-16-9">
                      <Image
                        src="/assets/blog-default-pic.jpg"
                        alt="blog_default_pic"
                        layout='fill'
                        objectFit="cover"
                      />
                  </div>

                  <div className="w-full flex gap-2 my-3 justify-start items-center">
                      {blog.categories.map(category => (
                      <div key={category.id} className="font-bold text-xs text-white bg-black p-1 px-2 border rounded">
                          {category.category_title}
                      </div>
                      ))}
                  </div>

                  <p className='font-bold text-xl'>{blog.blog_title}</p>
                  <p className='mb-10'>{blog.blog_content.split(' ').slice(0,30).join(' ') + "..."}</p>
                  <div className='absolute bottom-2 flex justify-between pt-11'>
                      <p>{blog.user.user_fullname}</p>
                  </div>
              </div>
          ))}
      </div>
    </>
  );
  
}
