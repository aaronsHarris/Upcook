import api  from "./api-config";

export const getAllIngredients = async () => {
    const res = await api.get('/ingredients')
    return res.data
}