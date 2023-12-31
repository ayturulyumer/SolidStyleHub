import * as request from "../lib/request.js"
const baseUrl = process.env.REACT_APP_URL
console.log(baseUrl)

export const getAll = async () => {
    const photos = await request.get(`${baseUrl}/products`)
}