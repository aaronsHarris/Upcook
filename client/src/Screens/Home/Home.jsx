import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="absolute w-screen h-screen flex">
        <div className="hidden lg:block w-6/12 h-full">
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1635817105/upcook/PlatitHero_pjkpvu.jpg"
            alt="upcook"
            className="w-full h-full object-cover  shadow-lg "
          />
        </div>
        <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
          <div className="w-5/6 sm:w-1/2 mx-auto text-center">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-gray-800  lg:text-6xl mb-24">
                Upcook
              </h1>
              <p className="mt-4 text-gray-600 lg:text-2xl">
                Find quality recipes
              </p>
              <p className="mt-4 text-gray-600 lg:text-2xl">
                Learn from the pros
              </p>
              <p className="mt-4 text-gray-600 lg:text-2xl">
                Cook it and serve
              </p>
              <div className=" mt-6">
              <Link to="/">
              <button type="button" className="py-2 px-4  bg-green hover:bg-black focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Get Started
                  </button>
                  </Link>
              </div>
             
              <div className="mt-6">
                <Link to="/recipes">
              <button type="button" className="py-2 px-4  bg-black hover:bg-green focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Recipes
                  </button>
                  </Link>
              </div>
              <div className="mt-6">
                <Link to="/blogs">
              <button type="button" className="py-2 px-4  bg-white border-0 hover:bg-green focus:ring-black focus:ring-offset-black text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Blogs
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
