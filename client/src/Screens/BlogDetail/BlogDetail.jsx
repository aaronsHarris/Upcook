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
      <div className="flex justify-center">
      <div class="fixed h-80">
        <img alt="content" class=" h-full w-full" src={blog?.image_url}/>
        </div>
      </div>
<main class=" mt-80 relative container mx-auto bg-white px-4">
  <article class="max-w-prose mx-auto py-8">
          <h1 class="text-2xl font-bold">{blog?.title}</h1>
          <h2 class="mt-2 text-lg text-gray-500">{blog?.tagline}</h2>
          <p class="mt-6">{blog?.content}</p>
  </article>
</main>
    </>
  );
};

export default BlogDetail;
