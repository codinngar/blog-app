import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full z-50 py-2 border-b-2 fixed top-0 left-0 bg-[#f5f1e6]">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-row justify-between items-center">
        <Link to="/">
          <h1 className="font-bold">Bloggy</h1>
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="create-post">Create Post</Link>
        </div>
        <div className="hidden md:flex gap-2">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        </div>

        <Button className="md:hidden" variant="outline">
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
