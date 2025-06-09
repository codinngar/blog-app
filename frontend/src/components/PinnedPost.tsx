import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const PinnedPost = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Pinned Posts</h2>
      <Card className="flex items-center md:gap-10 lg:gap-16 md:flex-row">
        <img src="https://placehold.co/300x200" className="w-full rounded-xl" />
        <div className="flex flex-col gap-4">
          <CardHeader className="flex flex-col gap-4">
            <CardDescription>
              <Badge variant="secondary">Technology</Badge>
            </CardDescription>
            <CardTitle className="text-3xl font-bold cursor-pointer">
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
    </div>
  );
};
export default PinnedPost;
