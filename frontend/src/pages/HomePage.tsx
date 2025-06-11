import PostList from "@/components/PostList";
import PinnedPost from "../components/PinnedPost";
import Hero from "../components/Hero";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-24 px-6 py-20 mx-auto md:px-12 lg:px-20 max-w-7xl">
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
