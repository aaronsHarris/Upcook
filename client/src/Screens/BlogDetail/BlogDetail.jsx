import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneBlog } from "../../Services/blogs";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as TiIcons from "react-icons/ti";
const BlogDetail = (props) => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const { handleBlogDelete } = props;

  useEffect(() => {
    const fetchSingleBlog = async () => {
      const blogData = await getOneBlog(id);
      setBlog(blogData);
    };
    fetchSingleBlog();
  }, [id]);

  return (
    <>
      <div className="flex justify-center">
        <div className="fixed h-80">
          
        <img alt="content" class=" h-full w-full" src={blog?.image_url}/>
        </div>
      </div>
<main className=" mt-80 relative container mx-auto bg-white px-4 text-center">
        <article className="max-w-prose mx-auto py-8">
          <div className="justify-start">
            <div className="menu-bars">
              <Link to="/blogs">
            <FaIcons.FaArrowLeft />
            </Link>
            </div>
            </div>
          <h1 className="text-2xl font-bold">{blog?.title}</h1>
          <h2 className="mt-2 text-lg text-gray-500">{blog?.tagline}</h2>
          <p className="mt-6">{blog?.content}</p>
        </article>
        <div className="flex justify-end m-24">
        <button className="menu-bars" onClick={() => handleBlogDelete(blog.id)}>
          <GoIcons.GoTrashcan />
        </button>
        <Link to={`/blogs/${id}/edit`}>
          <div className="">
          <button className="menu-bars">
            <TiIcons.TiPencil />
          </button>
          </div>
       </Link>
       </div>
</main>
    </>
  );
};

export default BlogDetail;
