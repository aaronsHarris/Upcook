import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { blog } = props;
    return (
        <Link to={`/blogs/${blog.id}`}>
        <div class="flex max-w-6xl h- mx-4 overflow-hidden 
        bg-white rounded-lg shadow-lg my-10 text-center">
        <img class="w-1/3 bg-cover" src={blog.image_url} />
        <div class="w- p-4 md:p-4">
                <h1 class="text-3xl font-bold text-gray-800">{ blog.title}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{blog.title}</p> 
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