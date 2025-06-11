import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface BlogPostProps {
  title: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

const BlogPost = ({
  title,
  content,
  category,
  date,
  image,
  author,
}: BlogPostProps) => {
  const navigate = useNavigate();

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
        ← Back to Posts
      </Button>

      <div className="space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary">{category}</Badge>
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
