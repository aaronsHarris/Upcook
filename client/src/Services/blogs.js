import api from './api-config';


export const getAllBlogs = async () => {
    const res = await api.get('/blogs')
    return res.data
}

export const getOneBlog = async (id) => {
    const res = await api.get(`/blogs/${id}`)
    return res.data
}

export const postBlog = async (blogData) => {
    const res = await api.post('/blogs', { blog: blogData })
    return res.data
}

export const putBlog = async (id, blogData) => {
    const res = await api.put(`/blogs/${id}`, { blog: blogData })
    return res.data
}

export const deleteBlog = async (id) => {
    const res = await api.delete(`/blogs/${id}`)
    return res
}