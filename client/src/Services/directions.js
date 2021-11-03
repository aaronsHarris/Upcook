import api from "./api-config";

export const getAllDirections = async () => {
    const res = await api.get('/directions')
    return res.data
}

export const postDirection = async (directionData) => {
    const res = await api.post('/directions', { direction: directionData })
    return res.data
}