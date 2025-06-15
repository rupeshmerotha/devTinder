import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import Card from "./Card";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeed = async () => {
            // Check if we already have feed data
            const hasFeedData = feed && (Array.isArray(feed) ? feed.length > 0 : (feed.data && Array.isArray(feed.data) && feed.data.length > 0));
            
            if (!hasFeedData) {
                try {
                    setLoading(true);
                    setError(null);
                    const res = await axios.get(BASE_URL + "/feed", {
                        withCredentials: true
                    });
                    dispatch(addFeed(res.data));
                } catch (err) {
                    console.error("Feed fetch error:", err);
                    setError(err.response?.data?.message || "Failed to load feed");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchFeed();
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center my-12">
                <div className="text-center">Loading feed...</div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center my-12">
                <div className="text-center text-red-500">Error: {error}</div>
            </div>
        );
    }

    // Get the actual feed array from the state
    const feedArray = Array.isArray(feed) ? feed : (feed?.data && Array.isArray(feed.data) ? feed.data : null);

    // No feed data
    if (!feedArray || feedArray.length === 0) {
        return (
            <div className="flex justify-center my-12">
                <div className="text-center">No users to show</div>
            </div>
        );
    }

    // Render first user card
    return (
        <div className="flex justify-center my-12">
            <Card user={feedArray[0]} />
        </div>
    );
};

export default Feed;