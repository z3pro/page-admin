import { instance } from "./axios";

export const GET_USER = async () => {
  let result = await instance.get("users");
  return result.data;
};
export const POST_USER = async (newUser) => {
  try {
    await instance.post("users", newUser);
  } catch (error) {}
};
export const PUT_USER = async (updateUser) => {
  await instance.put("users/" + updateUser.id, updateUser);
};
export const PATCH_USER = async (updateUser) => {
  await instance.patch("users/" + updateUser.id, updateUser);
};
export const DELETE_USER = async (id) => {
  await instance.delete("users/" + id);
};
export const SEARCH_USER = async (string) =>{
  let result = await instance.get("users?name_like="+string);
  return result.data;
}