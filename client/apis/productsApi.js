import * as request from "../lib/request.js";
const baseUrl = import.meta.env.VITE_APP_URL;

export const getAll = async () => {
  const photos = await request.get(`${baseUrl}/products?populate=*`);
  return Object.values(photos.data)
};
