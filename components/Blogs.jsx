"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Blogs = () => {
    
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const res = await fetch('http://127.0.0.1:8000/api/blogs');
            const data = await res.json();
            setBlogs(data);
        };  
        getBlogs();
    },[]);


    return (
        <>
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
                    <div key={blog.id} className="border rounded-md p-3">
                    <Link href={'/blogs/' + blog.id}>
                        <h1 className="font-bold">{blog.blog_title}</h1>
                    </Link>
                    <p>{blog.blog_content}</p>
                    <p>{timeAgo}</p>
                    </div>
                );
            })}

        </>
    );
}
 
export default Blogs;