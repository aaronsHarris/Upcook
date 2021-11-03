import api from './api-config';


export const getAllRecipes = async () => {
    const res = await api.get('/recipes')
    return res.data
}

export const getOneRecipe = async (id) => {
    const res = await api.get(`/recipes/${id}`)
    return res.data
}

export const postRecipe = async (recipeData) => {
    const res = await api.post('/recipes', { recipe: recipeData })
    return res.data
}

export const putRecipe = async (id, recipeData) => {
    const res = await api.put(`/recipes/${id}`, { recipe: recipeData })
    return res.data
}

export const deleteRecipe = async (id) => {
    const res = await api.delete(`/recipes/${id}`)
    return res
}