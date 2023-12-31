import * as request from "../lib/request.js";
const baseUrl = import.meta.env.VITE_APP_URL;

export const getProductsByType = async (type) => {
  const photos = await request.get(`${baseUrl}/products?populate=*&[filters][type][$eq]=${type}`);
  return Object.values(photos.data)
};
