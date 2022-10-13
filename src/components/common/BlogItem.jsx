import { Link } from "react-router-dom";

export default function BlogItem({ id, title, description }) {
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      <img
        src={`${process.env.REACT_APP_BASE_URL}/img/${id}.jpg`}
        alt={title}
        loading="lazy"
        width="1000"
        height="667"
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div className="sm:w-7/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
          <Link className="block w-max text-cyan-600" to={`/blogs/${id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
