import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";


const Blogs = (props) => {
  const { blogs } = props;
  return (
    <div className="flex flex-col  min-h-screen max-w-full">
      <div className="grid grid-cols-3 justify-center content-center gap-4 text-center my-10">
        <div className="grid col-start-2">
          <div className="text-5xl">Learn</div> 
        </div>
        <div classname="grid col-start-3">
        <Link to="/blogs/new">
            <button className="text-2xl">add</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
      {blogs.map((blog) => (
          
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

    // <div>
    //   <h3>Blogs</h3>
    //   <Link to="/blogs/new">add</Link>
    //   <div>
    //     {blogs.map((blog) => (
    //       <BlogCard blog={blog} />
    //     ))}
    //   </div>
      
    // </div>