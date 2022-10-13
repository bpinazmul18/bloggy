import { blogs } from "../utils/blogs";

export const fetchBlogs = () => blogs;
export const fetchBlog = (id) => blogs.find((blog) => blog.id === id);
