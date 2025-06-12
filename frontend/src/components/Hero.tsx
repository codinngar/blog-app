import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold text-center">Welcome to my blog</h1>
      <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground">
        Discover the latest trends, tips, and best practices in modern web
        development. From UI components to design systems, stay updated with our
        expert insights.
      </p>
      <div className="flex gap-4">
        <Button>View all articles</Button>
        <Link to="/create-post">
          <Button>Create post</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
