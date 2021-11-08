import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
const BlogCreate = (props) => {
  const [blogFormData, setblogFormData] = useState({
    title: "",
    tagline: "",
    content: "",
    image_url: "",
  });
  const { title, tagline, content, image_url } = blogFormData;
  const { handleBlogCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setblogFormData({
      ...blogFormData,
      [name]: value,
    });
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-6/12 h-full">
        <img
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1635817224/upcook/istockphoto-1144401032-612x612_kc4u6b.jpg"
          className="w-full h-full object-cover  shadow-lg " alt="cooking"
        />
      </div>
          <div className="w-full lg:w-7/12 overflow-scroll py-24 relative">
          <Link to='/blogs'>
        <div className="close-button"><AiIcons.AiOutlineClose /></div>
        </Link>
        <form
          className="w-5/6 sm:w-1/2 mx-auto text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleBlogCreate(blogFormData);
          }}
        >
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636248110/upcook/0d7b260309e34d43b8fce143e4c99b6b_1_kaghfg.png"
            className="h-24 block mx-auto" alt="cooking"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Share your Knowledge
            </h2>
          </div>
          <div className="mt-12">
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Tagline"
                name="tagline"
                value={tagline}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-4">
              <textarea
                className="form-textarea block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                rows="4"
                placeholder="Content"
                name="content"
                value={content}
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

export default BlogCreate;

//     <div>
//         <h1>blog create</h1>

//         <form
//     className="blog-form"
//     onSubmit={(e) => {
//       e.preventDefault();
//       handleBlogCreate(blogFormData);
//     }}
//         >
//             <div>
//                 title:
//             <input type="text" name="title" value={title} onChange={handleChange} />
//             </div>
//             <div>
//                 tagline:
//             <input type="text" name="tagline" value={tagline} onChange={handleChange} />
//             </div>
//             <div>
//                 content:
//             <input type="text" name="content" value={content} onChange={handleChange} />
//             </div>
//             <div>
//                 image:
//             <input type="text" name="image_url" value={image_url} onChange={handleChange} />
//             </div>
//             <button>submit</button>
//   </form>
//     </div>
