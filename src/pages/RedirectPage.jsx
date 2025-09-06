import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RedirectPage() {
    const { id } = useParams();

    useEffect(() => {
        async function fetchAndRedirect() {
            try {
                // Call backend to get the original URL and redirect
                const res = await axios.get(`https://backend-url-shortner-a2wx.onrender.com/${id}`);
                // If backend responds with a redirect, browser will follow automatically
                // If backend responds with the URL, redirect manually:
                // window.location.href = res.data.originalUrl;
            } catch (err) {
                window.location.replace("/404");
            }
        }
        fetchAndRedirect();
    }, [id]);

    return <div>Redirecting...</div>;
}
