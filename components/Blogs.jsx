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

  return (
    <>
      <div className='flex w-full justify-center'>
        <SearchBar onSearch={handleBlogSearch}/>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
          {console.log(blogs)}
          {blogs.data?.map(blog => (
              <div key={blog.id} className="border p-2 border-bg-gray-400 rounded relative">
                  
                  <div className="aspect-ratio-16-9">
                      <Image
                      src="/assets/blog-default-pic.jpg"
                      alt="blog_default_pic"
                      layout='fill'
                      objectFit="cover"
                      className='w-100 h-100'
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
