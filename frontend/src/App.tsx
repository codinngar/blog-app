import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

const App = () => {
    return (
        <div className="flex flex-col px-6 py-20 mx-auto md:px-12 lg:px-20 max-w-7xl">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<PostPage />} />
            </Routes>
        </div>
    );
};

export default App;
