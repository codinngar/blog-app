import PostList from "@/components/PostList";
import PinnedPost from "../components/PinnedPost";
import Hero from "../components/Hero";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Separator />
      <PinnedPost />
      <Separator />
      <PostList />
      <Footer />
    </div>
  );
};

export default HomePage;
