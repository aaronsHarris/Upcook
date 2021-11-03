import api  from "./api-config";

export const getAllIngredients = async () => {
    const res = await api.get('/ingredients')
    return res.data
}

export const postIngredient = async (ingredientData) => {
    const res = await api.post('/ingredients', {ingredient: ingredientData})
    return res.data
}