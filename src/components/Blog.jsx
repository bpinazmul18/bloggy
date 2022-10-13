import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../services/http";

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
        <div className="mb-12 space-y-2 text-center">
          <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
            Author: {blog.author}
          </span>
          <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
            {blog.title}
          </h2>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/img/${id}.jpg`}
            alt={blog.title}
            loading="lazy"
            width="1000"
            height="667"
            className="h-60 mx-auto py-10 sm:h-full w-full sm:w-8/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <p className="lg:w-6/12 lg:mx-auto text-2xl pt-10 pb-20">
            {blog.description}
          </p>

          <section class="relative flex items-center justify-center antialiased py-10">
            <div class="container px-0 mx-auto sm:px-5">
              <div class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                <div class="flex flex-row">
                  <img
                    class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                    alt="Noob master's avatar"
                    src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                  />
                  <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                      Noob master
                      <span class="ml-2 text-xs font-normal text-gray-500">
                        2 weeks ago
                      </span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      Wow!!! how you did you create this?
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                      <svg
                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                        viewBox="0 0 95 78"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                      <svg
                        class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <hr class="my-2 ml-16 border-gray-200" />
                <div class="flex flex-row pt-1 md-10 md:ml-16">
                  <img
                    class="w-12 h-12 border-2 border-gray-300 rounded-full"
                    alt="Emily's avatar"
                    src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                  />
                  <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                      Emily
                      <span class="ml-2 text-xs font-normal text-gray-500">
                        5 days ago
                      </span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      I created it using TailwindCSS
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                      <svg
                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                        viewBox="0 0 95 78"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                      <svg
                        class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                <div class="flex flex-row md-10">
                  <img
                    class="w-12 h-12 border-2 border-gray-300 rounded-full"
                    alt="Anonymous's avatar"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                  />
                  <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                      Anonymous
                      <span class="ml-2 text-xs font-normal text-gray-500">
                        3 days ago
                      </span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      Very cool! I'll have to learn more about Tailwind.
                    </div>
                    <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                      <svg
                        class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                        viewBox="0 0 95 78"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </button>
                    <button class="inline-flex items-center px-1 -ml-1 flex-column">
                      <svg
                        class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <form className="w-full sm:w-8/12 mx-auto">
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required=""
                ></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
                <div className="flex pl-0 space-x-1 sm:pl-2">
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
