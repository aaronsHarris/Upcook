import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { blog } = props;
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-5 transform transition duration-300 ease-in-out">
        <div className="w-1/3 bg-cover bg-landscape">
          <img src={blog.image_url} alt="" />
      </div>
      <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-xl">
              {blog.title}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
              {blog.tagline}
          </p>
          
          
      </div>
  </div>
  </Link>
  );
};

export default BlogCard;

    // <div>
    //   <Link to={`/blogs/${blog.id}`}>
    //     <div className="blogCard" key={blog.id}>
    //       <div>{blog.title}</div>
    //       <div>{blog.tagline}</div>
    //       <img className="blogImage" src={blog.image_url} alt="recipeItem" />
    //     </div>
    //       </Link>
          
    // </div>