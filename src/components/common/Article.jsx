export default function Article({ blog }) {
  return (
    <>
      <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
        Author: {blog.author}
      </span>
      <h2 className="lg:w-8/12 lg:mx-auto text-2xl text-cyan-900 font-bold md:text-4xl">
        {blog.title}
      </h2>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/img/${blog.id}.jpg`}
        alt={blog.title}
        loading="lazy"
        width="1000"
        height="667"
        className="h-60 mx-auto py-10 sm:h-full w-full sm:w-8/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <p className="lg:w-8/12 lg:mx-auto text-justify text-2xl my-12">
        {blog.long_description}
      </p>
    </>
  );
}
