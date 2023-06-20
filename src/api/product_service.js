import { instance } from "./axios";

export const GET_PRODUCT = async () => {
  let result = await instance.get("products");
  return result.data;
};
export const POST_PRODUCT = async (newProduct) => {
  await instance.post("products", newProduct);
};
export const PUT_PRODUCT = async (updateProduct) => {
  await instance.put("products/" + updateProduct.id, updateProduct);
};
export const PATCH_PRODUCT = async (updateProduct) => {
  await instance.patch("products/" + updateProduct.id, updateProduct);
};
export const DELETE_PRODUCT = async (id) => {
  await instance.delete("products/" + id);
};
export const SEARCH_PRODUCT = async (string) => {
  let result = await instance.get("products?title_like=" + string);
  return result.data;
};
export const SEARCH_PRODUCT_ASC = async (string) => {
  let result = await instance.get("products?_sort=price&_order=asc");
  return result.data;
};
export const SEARCH_PRODUCT_DESC = async (string) => {
  let result = await instance.get("products?_sort=price&_order=desc");
  return result.data;
};
