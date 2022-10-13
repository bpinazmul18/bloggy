import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../services/http";
import Comments from "./Comments";
import Article from "./common/Article";
import CommentForm from "./common/CommentForm";

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const blog = fetchBlog(parseInt(id));
    setBlog(blog);
  }, []);

  if (!blog) return;

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="my-12 space-y-2 text-center">
          <Article blog={blog} />
          <Comments comments={blog.comments} />
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
