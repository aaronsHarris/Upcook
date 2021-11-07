import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

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
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1635817216/upcook/istockphoto-1134470382-170667a_y9j17w.jpg"
          className="w-full h-full object-cover  shadow-lg "
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
        <form
          className="w-5/6 sm:w-1/2 mx-auto text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636248110/upcook/0d7b260309e34d43b8fce143e4c99b6b_1_kaghfg.png"
            className="h-24 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
            <p className="mt-3 text-gray-800">
              New to Upcook?
              <Link to="/signup" className="text-blue-400 mx-2">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-12">
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <div class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"></div>
              <button
                class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

// <div>
//   <form
//   onSubmit={(e) => {
//     e.preventDefault();
//     handleLogin(formData);
//   }}
// >
//   <h3>Sign In</h3>
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
//     Password:
//     <input
//       type='password'
//       name='password'
//       value={password}
//       onChange={handleChange}
//     />
//   </label>
//   <br />
//   <Link to='/signup'>sign up</Link>
//   <button>Submit</button>
// </form>
// </div>
