import dataService from "../utils/DataService";

export const getPostById = async (postId) => {
  try {
    const res = await dataService.get(`Post/GetPostById?postId=${postId}`);
    return res.data.result;
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Something went wrong");
  }
};
