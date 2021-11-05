import { useState } from "react"


const BlogCreate = (props) => {
    const [blogFormData, setblogFormData] = useState({
        title: "",
        tagline: "",
        content: "",
        image_url: ""
    })
    const { title, tagline, content, image_url } = blogFormData
    const { handleBlogCreate } = props
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setblogFormData({
            ...blogFormData,
            [name]: value
        })
    }

    return (
        <div>
            <h1>blog create</h1>

            <form
        className="blog-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleBlogCreate(blogFormData);
        }}
            >
                <div>
                    title:
                <input type="text" name="title" value={title} onChange={handleChange} />
                </div>
                <div>
                    tagline:
                <input type="text" name="tagline" value={tagline} onChange={handleChange} />
                </div>
                <div>
                    content:
                <input type="text" name="content" value={content} onChange={handleChange} />
                </div>
                <div>
                    image:
                <input type="text" name="image_url" value={image_url} onChange={handleChange} />
                </div>
                <button>submit</button>
      </form>
        </div>
    )
}

export default BlogCreate
