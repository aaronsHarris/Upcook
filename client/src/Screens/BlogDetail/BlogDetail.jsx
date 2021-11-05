import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getOneBlog } from "../../Services/blogs";

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
      <div>
        <h1>blog detail</h1>
        <img src={blog?.image_url} alt="blogDetail" />
        <h2>{blog?.title}</h2>
        <h3>{blog?.tagline}</h3>
        <p>{blog?.content}</p>
        <button onClick={() => handleBlogDelete(blog.id)}>delete</button>
        <Link to={`/blogs/${id}/edit`}>
          <button>edit</button>
        </Link>
      </div>
    </>
  );
};

export default BlogDetail;
