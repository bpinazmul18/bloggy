export default function Blog() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
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
          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="./img/5.jpg"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">
                    Provident de illo eveniet commodi fuga fugiat laboriosam
                    expedita.
                  </h4>
                  <p className="text-gray-600">
                    Laborum saepe laudantium in, voluptates ex placeat quo harum
                    aliquam totam, doloribus eum impedit atque! Temporibus...
                  </p>
                </div>
                <a href="!#" className="block w-max text-cyan-600">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <img
              src="./img/1.jpg"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div className="sm:w-7/12 pl-0 p-5">
              <div className="space-y-2">
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-cyan-900">
                    Provident de illo eveniet commodi fuga fugiat laboriosam
                    expedita.
                  </h4>
                  <p className="text-gray-600">
                    Laborum saepe laudantium in, voluptates ex placeat quo harum
                    aliquam totam, doloribus eum impedit atque! Temporibus...
                  </p>
                </div>
                <a href="!#" className="block w-max text-cyan-600">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
