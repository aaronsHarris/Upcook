import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as AiIcons from "react-icons/ai";
import './blogEdit.css'
import { Link } from "react-router-dom";
const BlogEdit = (props) => {
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    tagline: "",
    content: "",
    image_url: "",
  });

  const { title, tagline, content, image_url } = blogFormData;
  const { id } = useParams();
  const { blogs, handleBlogUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const blogItem = blogs.find((blog) => blog.id === Number(id));
      setBlogFormData({
        title: blogItem.title,
        tagline: blogItem.tagline,
        content: blogItem.content,
        image_url: blogItem.image_url,
      });
    };
    if (blogs.length) {
      prefillFormData();
    }
  }, [blogs, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogFormData({
      ...blogFormData,
      [name]: value,
    });
  };

  return (
    <div className="absolute w-screen h-screen flex">
      <div className="hidden lg:block w-6/12 h-full">
        <img
          src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636306489/upcook/istockphoto-1199380263-612x612_dwrib4.jpg"
          className="w-full h-full object-cover  shadow-lg "
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
            handleBlogUpdate(id, blogFormData);
          }}
        >
          <img
            src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1636248110/upcook/0d7b260309e34d43b8fce143e4c99b6b_1_kaghfg.png"
            className="h-24 block mx-auto"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Update your Post
            </h2>
          </div>
          <div className="mt-12">
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800  dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Tagline"
                name="tagline"
                value={tagline}
                onChange={handleChange}
              />
            </div>

            <div class="w-full mt-4">
              <textarea
                class="form-textarea block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                rows="4"
                placeholder="Content"
                name="content"
                value={content}
                onChange={handleChange}
              ></textarea>
            </div>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 focus:border-blue-500
                focus:outline-none focus:ring"
                type="text"
                placeholder="Image"
                name="image_url"
                value={image_url}
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"></div>
              <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;

// <div>
//   <form
//     onSubmit={(e) => {
//       e.preventDefault();
//       handleBlogUpdate(id, blogFormData);
//     }}
//   >
//     <div>
//       title:
//       <input
//         type="text"
//         name="title"
//         value={title}
//         onChange={handleChange}
//       />
//     </div>
//     <div>
//       tagline:
//       <input
//         type="text"
//         name="tagline"
//         value={tagline}
//         onChange={handleChange}
//       />
//     </div>
//     <div>
//       content:
//       <input
//         type="text"
//         name="content"
//         value={content}
//         onChange={handleChange}
//       />
//     </div>
//     <div>
//       image:
//       <input
//         type="text"
//         name="image_url"
//         value={image_url}
//         onChange={handleChange}
//       />
//     </div>
//     <button>submit</button>
//   </form>
// </div>
