import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8">
      <Separator />
      <div className="flex items-center justify-between">
        <p>@ 2025 codinngar.com. All rights reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img className="w-6 cursor-pointer" src="github.svg" />
          <img className="w-6 cursor-pointer" src="linkedin.svg" />
          <img className="w-6 cursor-pointer" src="twitter.svg" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
