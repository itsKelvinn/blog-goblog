export async function getBlogs() {
  const response = await fetch(`http://127.0.0.1:8000/api/blogs`);
  const data = await response.json();
  return data;
}

export async function searchBlogs(search) {
  const response = await fetch(`http://127.0.0.1:8000/api/search?search=`+search);
  const data = await response.json();
  return data;
}