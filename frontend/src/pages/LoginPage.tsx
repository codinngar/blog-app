import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err: Error) => alert(err);
  const handleSuccess = (msg: string) => alert(msg);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        ...inputValue,
      });
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        navigate("/");
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <Card className="shadow w-full max-w-sm border p-8 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <CardHeader>
        <CardTitle className="text-center font-bold text-xl">
          Login to your account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
      <CardAction>
        Don't have an account?{" "}
        <Link to="/signup">
          <Button
            variant="link"
            className="p-0 pl-1 text-md"
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </Link>
      </CardAction>
    </Card>
  );
};

export default Login;
