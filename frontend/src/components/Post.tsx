import  { Badge } from "./ui/badge";
import  {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";

const Post = () => {
  return (
    <Card>
      <img src="https://placehold.co/300x200" className="rounded-xl" />
      <div className="flex flex-col gap-4">
        <CardHeader className="flex flex-col gap-4">
          <CardDescription>
            <Badge variant="secondary">Technology</Badge>
          </CardDescription>
          <CardTitle className="text-2xl font-bold cursor-pointer">
            Exploring the Future of AI in Modern Technology Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
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
