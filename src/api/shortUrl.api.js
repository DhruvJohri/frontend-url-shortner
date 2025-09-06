import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (url, slug) => {
    const { data } = await axiosInstance.post("/create", { url, slug }); // <-- fixed path
    return data.shortUrl;
};
