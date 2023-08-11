"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Blogs = () => {
    
    const [blogs,setBlogs] = useState([]);
    const [buttonActive , setButtonActive] = useState(0);

    const getBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs');
        const data = await res.json();
        setBlogs(data);
    };  

    useEffect(() => { 
        getBlogs();
        setButtonActive(1);
    },[]);


    
    const technologyBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs/technology');
        const data = await res.json();
        setBlogs(data);    
        setButtonActive(2);
    }

    const lifestyleBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs/lifestyle');
        const data = await res.json();
        setBlogs(data);
        setButtonActive(5);
    }

    const foodBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs/food');
        const data = await res.json();
        setBlogs(data);
        setButtonActive(4);
    }

    const travelBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs/travel');
        const data = await res.json();
        setBlogs(data);
        setButtonActive(3);
    }


    return (
        <>  
            <div className="w-full flex justify-between items-center px-2 h-16">
                <input type="text" className="hidden md:block lg:block border border-black rounded  md:w-40 lg:w-96 h-10 p-2 bg-gray-100 outline-none" placeholder="Serch Blog"/>
                <button className={" px-2 sm:px-6 md:px-10 border text-sm h-10 " + (buttonActive == 1 ? "transition-all ease-in bg-blue-100 border border-black rounded" : null)} onClick={() => {getBlogs()}}>All</button>
                <button className={" px-2 sm:px-6 md:px-4 border text-sm h-10 " + (buttonActive == 2 ? "transition-all ease-in bg-blue-100 border border-black rounded " : null)} onClick={() => {technologyBlogs()}}>Technology</button>
                <button className={" px-2 sm:px-6 md:px-4 border text-sm h-10 " + (buttonActive == 3 ? "transition-all ease-in bg-blue-100 border border-black rounded " : null)} onClick={() => {travelBlogs()}}>Travel</button>
                <button className={" px-2 sm:px-6 md:px-4 border text-sm h-10 " + (buttonActive == 4 ? "transition-all ease-in bg-blue-100 border border-black rounded " : null)} onClick={() => {foodBlogs()}}>Food</button>
                <button className={" px-2 sm:px-6 md:px-4 border text-sm h-10 " + (buttonActive == 5 ? "transition-all ease-in bg-blue-100 border border-black rounded " : null)} onClick={() => {lifestyleBlogs()}}>Lifestyle</button>
            </div>
            <div className="py-3 grid lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
                {blogs.data?.map((blog) => {
                    const apiDate = new Date(blog.created_at);
                    const currentDate = new Date();
                    const differenceInMilliseconds = currentDate - apiDate;
                    const differenceInSeconds = differenceInMilliseconds / 1000;
                    let timeAgo;

                    if (differenceInSeconds < 60) {
                        timeAgo = `${Math.round(differenceInSeconds)} seconds ago`;
                    } else if (differenceInSeconds < 3600) {
                        timeAgo = `${Math.round(differenceInSeconds / 60)} minutes ago`;
                    } else if (differenceInSeconds < 86400) {
                        timeAgo = `${Math.round(differenceInSeconds / 3600)} hours ago`;
                    } else {
                        timeAgo = `${Math.round(differenceInSeconds / 86400)} days ago`;
                    }

                    return (
                        <div key={blog.id} className="border flex flex-col rounded-md p-3 ">
                            <div className="relative w-full h-52 mb-3">
                                <Image src="/assets/blog-default-pic.jpg" alt="blog"  layout="fill" objectFit="cover"/>
                            </div>
                            <Link href={'/blogs/' + blog.id} className="mb-2" >
                                <h1 className="font-bold h-11">{blog.blog_title}</h1>
                            </Link>
                            <div className="flex gap-3 mb-2">
                                {blog.categories.map((category) => (<div className="border px-3 rounded text-sm text-white bg-black" key={category.id}>{category.category_title}</div>))}
                            </div>
                            <p>{blog.blog_content.split(' ').slice(0, 18).join(' ') + ' ...'}</p>
                            <p>{timeAgo}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
 
export default Blogs;
