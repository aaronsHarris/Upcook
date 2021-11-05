import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBlogUpdate(id, blogFormData);
        }}
      >
        <div>
          title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          tagline:
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </div>
        <div>
          image:
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default BlogEdit;
