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
      <Card className="flex flex-col md:flex-row">
        <div className="h-[200px] md:h-[350px] md:w-1/2 lg:w-3/5">
          <img
            src="https://cdn.pixabay.com/photo/2025/04/30/20/26/armillary-9570057_960_720.jpg"
            className="border w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 md:w-1/2 lg:w-3/5">
          <CardHeader className="p-0">
            <CardDescription>
              <Badge variant="secondary">Technology</Badge>
            </CardDescription>
            <CardTitle className="text-2xl md:text-3xl font-bold cursor-pointer mt-2">
              Exploring the Future of AI in Modern Technology Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">
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
