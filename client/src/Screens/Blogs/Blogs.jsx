import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";


const Blogs = (props) => {
  const { blogs } = props;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <div>
        <div className="flex flex-col text-4xl font-extrabold text-gray-900 text-center ">
          <div className="">Learn</div>
        <Link to="/recipes/new">
             <button className=" text-2xl self-end">add</button>
           </Link>
        </div>
        <section className="mt-6 grid grid-cols-1 justify-center items-center md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
        {blogs.map((blog) => (
                
                <BlogCard blog={blog} />
              ))}
        </section>
    </div>
</section>
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