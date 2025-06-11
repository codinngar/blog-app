import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Post } from "../types/Post";
import api from "@/api";
import LoadingPage from "./LoadingPage";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        api.get(`/posts/${id}`).then((res) => setPost(res.data));
    }, [id]);

    if (!post) return <LoadingPage />;

    return (
        <div className="flex flex-col gap-4">
            <Link to={"/"} className="hidden lg:block">
                <Button variant="secondary" className="fixed top-10 left-12">
                    <ArrowLeft />
                </Button>
            </Link>
            <h1 className="text-5xl font-bold text-center">{post.title}</h1>
            <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground">
                {post.description} Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatum delectus eligendi quidem iste,
                tenetur fugit deleniti rerum inventore illum eum enim tempora
                cumque harum incidunt provident illo. Consectetur, quas eius!
            </p>
            <div className="my-2 flex justify-between items-center gap-2 mx-auto">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{post.author}</span>
            </div>
            <img
                className="object-cover w-full max-h-[600px] border rounded-xl"
                src={post.image}
            />
            <div className="my-12 text-lg">{post.content}</div>
            <Footer />
        </div>
    );
}
