"use client";

const From = ({blog , setBlog , handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">    
                <label>Blog title</label>
                <input type="text" value={blog.blog_title} onChange={(e) => setBlog({...blog , blog_title: e.target.value})} className="border border-black p-2"/>
                <label>Blog content</label>
                <textarea name="" id="" cols="30" rows="10" value={blog.blog_content} onChange={(e) => setBlog({...blog , blog_content: e.target.value})} className="border border-black p-2"></textarea>
                <div className="flex w-full justify-end">
                    <button className="border border-black px-2 font-bold rounded-lg" onClick={() => {console.log(blog)}}>Create</button>
                </div>
            </div>
        </form>
    );
}
 
export default From;