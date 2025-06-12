import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/Post";
import api from "@/api";
import LoadingPage from "./LoadingPage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash } from "lucide-react";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error while deleting post:", error);
    }
  };

  if (!post) return <LoadingPage />;

  return (
    <div className="flex flex-col gap-4">
      <Link to={"/"} className="hidden lg:block">
        <Button variant="secondary" className="fixed top-10 left-12">
          <ArrowLeft />
        </Button>
        <Button
          variant="destructive"
          className="fixed top-10 right-12"
          onClick={handleDelete}
        >
          <Trash />
        </Button>
      </Link>
      <h1 className="text-5xl font-bold text-center">{post.title}</h1>
      <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground">
        {post.description}
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
      <div
        className="my-12 text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <Footer />
    </div>
  );
}
