import api from "@/api";
import RichTextEditor from "@/components/rich-text-editor/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tag: "",
    content: "",
  });

  const handlePost = async () => {
    const { title, description, image, tag, content } = post;

    if (!title || !description || !image || !tag || !content) {
      alert("Please fill in all fields before posting.");
      return;
    }

    try {
      await api.post("/posts", {
        title,
        description,
        image,
        tag,
        content,
        author: "John Doe",
      });
      navigate("/");
    } catch (error) {
      console.error("Error while posting post:", error);
      alert("Failed to post. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPost((prev) => ({ ...prev, [id]: value }));
  };

  const handleTagChange = (value: string) => {
    setPost((prev) => ({ ...prev, tag: value }));
  };

  const handleContentChange = (content: string) => {
    setPost((prev) => ({ ...prev, content }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Link to={"/"} className="hidden lg:block">
        <Button variant="secondary" className="fixed top-10 left-12">
          <ArrowLeft />
        </Button>
      </Link>
      <h1 className="text-4xl font-bold text-center pb-12">Create Post</h1>

      <div className="w-full flex flex-col gap-6 mb-6">
        <div className="w-full">
          <Label className="mb-2">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            value={post.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <Label className="mb-2">Description</Label>
          <Input
            id="description"
            type="text"
            placeholder="Description"
            value={post.description}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full">
          <Label className="mb-2">Image URL</Label>
          <Input
            id="image"
            type="url"
            placeholder="Image URL"
            value={post.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-3/5">
          <Label className="mb-2">Tag</Label>
          <Select onValueChange={handleTagChange} value={post.tag}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <RichTextEditor content={post.content} onChange={handleContentChange} />

      <div className="w-full flex justify-end items-center mt-8">
        <Button onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
};

export default CreatePostPage;
