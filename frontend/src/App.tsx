import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col pt-40 pb-20 mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </div>
  );
};

export default App;
