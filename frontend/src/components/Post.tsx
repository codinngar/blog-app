import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";

const Post = () => {
  return (
    <Card>
      <div className="h-[200px]">
        <img
          src="https://cdn.pixabay.com/photo/2025/04/30/20/26/armillary-9570057_960_720.jpg"
          className="w-full h-full object-cover rounded-xl"
          alt="Post image"
        />
      </div>
      <div className="flex flex-col gap-4">
        <CardHeader className="p-0">
          <CardDescription>
            <Badge variant="secondary">Technology</Badge>
          </CardDescription>
          <CardTitle className="text-2xl font-bold cursor-pointer mt-2">
            Exploring the Future of AI in Modern Technology Trends
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground line-clamp-5">
            Discover how AI is transforming industries and learn about the
            latest advancements in artificial intelligence. Discover how AI is
            transforming industries and learn about the latest advancements in
            artificial intelligence.
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

export default Post;
