import React from "react";

const From = ({ blog, setBlog, handleSubmit }) => {
  // Toggle function to add or remove a category ID
  const toggleCategory = (categoryId) => {
    if (blog.categories.includes(categoryId)) {
      return blog.categories.filter((id) => id !== categoryId);
    } else {
      return [...blog.categories, categoryId];
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <label>Blog title</label>
        <input
          type="text"
          value={blog.blog_title}
          onChange={(e) =>
            setBlog({ ...blog, blog_title: e.target.value })
          }
          className="border border-black p-2"
        />
        <label>Category</label>
        <div>
          <div
            onClick={() => setBlog({ ...blog, categories: toggleCategory(1) })}
            className={blog.categories.includes(1) ? "selected" : ""}
          >
            Food
          </div>
          <div
            onClick={() => setBlog({ ...blog, categories: toggleCategory(2) })}
            className={blog.categories.includes(2) ? "selected" : ""}
          >
            Travel
          </div>
          <div
            onClick={() => setBlog({ ...blog, categories: toggleCategory(3) })}
            className={blog.categories.includes(3) ? "selected" : ""}
          >
            Lifestyle
          </div>
          <div
            onClick={() => setBlog({ ...blog, categories: toggleCategory(4) })}
            className={blog.categories.includes(4) ? "selected" : ""}
          >
            Technology
          </div>
        </div>
        <label>Blog content</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={blog.blog_content}
          onChange={(e) =>
            setBlog({ ...blog, blog_content: e.target.value })
          }
          className="border border-black p-2"
        ></textarea>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="border border-black px-2 font-bold rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default From;
