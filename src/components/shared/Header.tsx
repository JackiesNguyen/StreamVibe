import Image from "./Image";
import { logoImg } from "@/assets";
import WrapperContainer from "./WrapperContainer";
import { Bell, Search } from "lucide-react";
import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./CustomAvatar";
import PATH from "@/constants/path";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <WrapperContainer className="flex items-center justify-between py-[30px]">
        <Link to={PATH.ROOT}>
          <Image src={logoImg} alt="logoImg" className="w-[200px] h-[60px]" />
        </Link>
        <Navbar />
        <div className="flex items-center gap-[30px]">
          <Search className="w-[34px] h-[34px] text-white cursor-pointer" />
          <Bell className="w-[34px] h-[34px] text-white cursor-pointer" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JackiesNguyen</AvatarFallback>
          </Avatar>
        </div>
      </WrapperContainer>
    </header>
  );
};

export default Header;
