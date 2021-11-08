import { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const RecipeCreate = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    difficulty: "",
    description: "",
    image_url: "",
    ingredients: [],
    directions: [],
  });
  const {
    name,
    time,
    difficulty,
    description,
    image_url,
    ingredients,
    directions,
  } = formData;
  const { handleRecipeCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-6/12 h-full">
      
        <img
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1635817125/upcook/istockphoto-478776508-612x612_stm0yw.jpg"
          className="w-full h-full object-cover  shadow-lg "
        />
      </div>
      <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
      <Link to='/recipes'>
        <div className="close-button"><AiIcons.AiOutlineClose /></div>
        </Link>
        <form
          className="w-5/6 sm:w-1/2 mx-auto text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleRecipeCreate(formData);
          }}
        >
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636248110/upcook/0d7b260309e34d43b8fce143e4c99b6b_1_kaghfg.png"
            className="h-24 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Add your Recipe</h2>
            
          </div>
          <div className="mt-12">
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Time"
                name="time"
                value={time}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Difficulty"
                name="difficulty"
                value={difficulty}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-4">
              {/* <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleChange}
              /> */}
              <textarea
                className="form-textarea block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                rows="4"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Image"
                name="image_url"
                value={image_url}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mt-4">
              {/* <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={ingredients}
                onChange={handleChange}
              /> */}
              <textarea
                className="form-textarea block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                rows="3"
                type="text"
                placeholder="Ingredients"
                name="ingredients"
                value={ingredients}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full mt-4">
              {/* <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Directions"
                name="directions"
                value={directions}
                onChange={handleChange}
              /> */}
              <textarea
                className="form-textarea block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                rows="3"
                type="text"
                placeholder="Directions"
                name="directions"
                value={directions}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"></div>
              <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-black rounded hover:bg-green focus:outline-none">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreate;

// <div className="create-container">
//   <h1>recipe create</h1>

//   <form
//     className="recipe-form"
//     onSubmit={(e) => {
//       e.preventDefault();
//       handleRecipeCreate(formData);
//     }}
//   >

//     <div className="recipe-input">
//       Name:
//               <input type="text" name="name"value={name} onChange={handleChange} />
//     </div>
//     <div className="recipe-input">
//       time:
//       <input type="text" name="time"value={time} onChange={handleChange} />
//     </div>
//     <div className="recipe-input">
//       difficulty
//       <input type="text" name="difficulty" value={difficulty} onChange={handleChange} />
//     </div>
//     <div className="recipe-input">
//       description
//       <input type="text" name="description" value={description} onChange={handleChange} />
//     </div>
//     <div>
//       image
//       <input type="text" name="image_url" value={image_url} onChange={handleChange} />
//     </div>
//     <div>
//       ingredients
//       <input type="text" name="ingredients" value={ingredients} onChange={handleChange} />
//     </div>
//     <div>
//       directions
//       <input type="text" name="directions" value={directions} onChange={handleChange} />
//     </div>
//     <br />
//     <button>Submit</button>
//   </form>
// </div>
