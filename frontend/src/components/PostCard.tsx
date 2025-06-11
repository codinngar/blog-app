import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
} from "./ui/card";
import type { Post } from "@/types/Post";

interface PostCardProps {
    post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <Card>
            <div className="h-[200px]">
                <img
                    src={post.image}
                    className="w-full h-full object-cover rounded-xl"
                    alt="Post image"
                />
            </div>
            <div className="flex flex-col gap-4">
                <CardHeader className="p-0">
                    <CardDescription>
                        <Badge variant="secondary">{post.tag}</Badge>
                    </CardDescription>
                    <CardTitle className="text-2xl font-bold cursor-pointer mt-2">
                        <Link to={`/posts/${post._id}`} key={post._id}>
                            {post.title}
                        </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-muted-foreground line-clamp-5">
                        {post.description}
                    </p>
                </CardContent>
            </div>
        </Card>
    );
};

export default PostCard;
