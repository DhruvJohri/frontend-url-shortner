import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (password, email) => {
    const { data } = await axiosInstance.post("/auth/login", { email, password });
    return data;
};

export const registerUser = async (name, password, email) => {
    const { data } = await axiosInstance.post("/auth/register", { name, email, password });
    return data;
};

export const logoutUser = async () => {
    const { data } = await axiosInstance.get("/auth/logout");
    return data;
};

export const getCurrentUser = async () => {
    const { data } = await axiosInstance.get("/auth/me");
    return data;
};

export const getAllUserUrls = async () => {
    const { data } = await axiosInstance.post("/user/urls");
    return data;
};
