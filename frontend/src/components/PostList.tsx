import { useEffect, useState } from "react";
import { getAllPosts } from "@/api/posts";
import PostCard from "./PostCard";
import type { Post } from "@/types/Post";

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res);
        });
    }, []);

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
