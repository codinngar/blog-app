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
      <Button>View all articles</Button>
    </div>
  );
};
export default Hero;
