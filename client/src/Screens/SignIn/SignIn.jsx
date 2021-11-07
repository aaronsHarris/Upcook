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
          className="w-full h-full object-cover"
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
              <Link to="/signup" className="text-blue-400">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-12">
            {/* <FormGroup>
              <InputGroup
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </FormGroup>
            <FormGroup>
              <InputGroup
                type="password"
                name="password"
                placeholder="Your password"
              />
            </FormGroup> */}
            {/* <FormGroup>
              <Button text="Log In" submit full />
            </FormGroup> */}
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <a
                href="#"
                class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                
              </a>

              <button
                class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-400">
                {/* Forgot your password? */}
              </a>
            </div>
            {/* <div className="mt-4">
              <p className="text-left text-gray-800">Or login with</p>
              <div className="mt-2 grid grid-cols-3 gap-6 text-black text-2xl">
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href="#"
                  className="block border border-gray-600 rounded-sm flex items-center justify-center py-3 hover:border-blue-400 hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div> */}
            {/* <div className="mt-6 border-t border-b border-gray-300">
              <FormGroup>
                <CheckboxGroup
                  label="Remember this device"
                  name="rememberMe"
                  defaultChecked
                />
              </FormGroup>
            </div> */}
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
