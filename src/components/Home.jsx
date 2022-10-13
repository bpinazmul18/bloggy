import { useEffect, useState } from "react";
import { fetchBlogs } from "../services/http";
import BlogItem from "./common/BlogItem";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogs = fetchBlogs();
    setBlogs(blogs);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="my-12 space-y-2 text-center">
          <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
            Blog
          </span>
          <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
            Sharing is Caring
          </h2>
          <p className="lg:w-6/12 lg:mx-auto">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {blogs.map((blog) => {
            return (
              <BlogItem
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
