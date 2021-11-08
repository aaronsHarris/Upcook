import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
    const { handleRegister } = props;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-6/12 h-full">
        <img
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636250957/upcook/istockphoto-678860402-612x612_r9etzr.jpg"
          className="w-full h-full object-cover" alt="signup"
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <form
          className="w-5/6 sm:w-1/2 mx-auto text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636248110/upcook/0d7b260309e34d43b8fce143e4c99b6b_1_kaghfg.png"
            className="h-24 block mx-auto shadow-xl11" alt="signup"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get started with us today!</h2>
            <div className="text-lg">Create your account to share your persoal knoledge, skills, and recipes</div>
            <p className="mt-3 text-gray-800">
              Already have an account?
              <Link to="/signin" className="text-blue-400 mx-2">
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-12">
          <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="Username"
                
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"></div>
              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-green focus:outline-none"   
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

    // <div>
    //   <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     handleRegister(formData);
    //   }}
    // >
    //   <h3>Register</h3>
    //   <label>
    //     Username:
    //     <input
    //       type='text'
    //       name='username'
    //       value={username}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Email:
    //     <input type='text' name='email' value={email} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input
    //       type='password'
    //       name='password'
    //       value={password}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <br />
    //   <button>Submit</button>
    // </form>
    // </div>