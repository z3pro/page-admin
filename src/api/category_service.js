import { instance } from "./axios";

export const GET_CATEGORY = async () => {
  let result = await instance.get("category");
  return result.data;
};
export const POST_CATEGORY = async (newCategory) => {
  await instance.post("category", newCategory);
};
export const PUT_CATEGORY = async (updateCategory) => {
  await instance.put("category/" + updateCategory.id, updateCategory);
};
export const PATCH_CATEGORY = async (updateCategory) => {
  await instance.patch("category/" + updateCategory.id, updateCategory);
};
export const DELETE_CATEGORY = async (id) => {
  await instance.delete("category/" + id);
};
export const SEARCH_CATEGORY = async (string) =>{
  let result = await instance.get("category?title_like="+string);
  return result.data;
}