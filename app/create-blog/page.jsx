"use client";
import From from "@/components/Form";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useSession } from "next-auth/react";

const CreateBlog = () => {
    
    const [blog,setBlog] = useState({blog_title: ' ' , blog_content: ' ' , user_id : 3});
    const router = useRouter();
    const {session} = useSession();

    if(!session)
    {
        router.push('/auth/signin');
    }

    const postBlog = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/blogs',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                blog_title : blog.blog_title ,
                blog_content : blog.blog_content ,
                user_id : blog.user_id
            })
        });

        if(res.ok)
        {
            router.push('/');
        }

        const resutl = await res.json();
        console.log(resutl);
    }

    return (
        <div> 
            <div className="w-full py-6">
                <h1 className="font-bold text-3xl">Create your personal Blog</h1>
                <p>
                    Creating your personal blog is a great way to share your thoughts, ideas, and experiences with others. With your own blog, you can express yourself in a unique and personal way, and connect with readers who share your interests and passions.
                </p>
            </div>
            <From blog={blog} setBlog={setBlog} handleSubmit={postBlog} />
        </div>
    );
}
 
export default CreateBlog;