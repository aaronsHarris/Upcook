import { Link } from "react-router-dom";
import './blogs.css'
const Blogs = (props) => {
  const { blogs } = props;
  return (
    <div>
      <h3>Blogs</h3>
      <Link to="/blogs/new">add</Link>
      <div>
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`}>
            <div className="blogCard" key={blog.id}>
              <p>{blog.title}</p>
              <p>{blog.tagline}</p>
              <img
                className="blogImage"
                src={blog.image_url}
                alt="recipeItem"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
