import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-6/12 h-full">
        <img
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1635817105/upcook/PlatitHero_pjkpvu.jpg"
          className="w-full h-full object-cover  shadow-lg "
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
                    <div className="w-5/6 sm:w-1/2 mx-auto text-center">
                    <div class="max-w-lg lg:mx-12 lg:order-2">
                    <h1 class="text-3xl font-medium tracking-wide text-gray-800  lg:text-6xl mb-24">Upcook</h1>
                    <p class="mt-4 text-gray-600 lg:text-2xl">Find quality recipes</p>
                    <p class="mt-4 text-gray-600 lg:text-2xl">Learn from the pros</p>
                    <p class="mt-4 text-gray-600 lg:text-2xl">Cook it and serve</p>
                    <div class="mt-6">
                        <Link to="/signup" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-green-500 rounded-md lg:inline hover:bg-green-400">Get Started</Link>
                    </div>
                </div>  
        </div>
        
      </div>
    </div>
        </div>
    )
}

export default Home
