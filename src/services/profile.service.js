import { toast } from "react-toastify";
import dataService from "../utils/DataService";

export const getProfile = async (userName) => {
    try {
        return dataService.get(`Profile/GetProfile?username=${userName}`);   
    } catch (error) {
        console.error(error);
        toast.error(error.message || "Something went wrong");
    }
};

export const getDataByType = async (userId, type) => {
    try {
        return dataService.get(`User/GetTagsList?userId=${userId}&profileType=${type}`);
    } catch (error) {
        console.error(error);
        toast.error(error.message || "Something went wrong");
    }
};