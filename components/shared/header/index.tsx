import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 w-full border-b ">
      <div className="flex h-full px-4 justify-between items-center">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              width={24}
              height={24}
              priority={true}
              className="w-8 h-8 rounded"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3 text-white">
              마이포폴
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
