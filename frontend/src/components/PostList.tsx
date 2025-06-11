import Post from "./Post";

const PostList = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default PostList;
