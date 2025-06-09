import PostList from "@/components/PostList";
import PinnedPost from "../components/PinnedPost";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24 py-20">
      <Hero />
      <PinnedPost />
      <PostList />
      <Footer />
    </div>
  );
};

export default HomePage;
