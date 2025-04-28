import { HomeIcon, File, UsersRound,LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Navbutton } from "./Navbutton";
import { ModeToggle } from "./modeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 sticky top-0">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2"> 
        <Navbutton icon={HomeIcon} label="Home" href="/" />
        <Link href="/home" >
            <h1 className="flex ml-4 gap-2 text-xl font-bold">Computer Repair Shop</h1>
        </Link>
        </div>
    

        <div className="flex items-center gap-2">
            <ModeToggle/>
            <Button variant="ghost"  size="icon"><LogoutLink> <LogOutIcon/></LogoutLink></Button>
          <Navbutton icon={UsersRound} label=""  href="/customers" />
          <Navbutton icon={File} label="" href="/tickets" />
        </div>

      </div>
    </header>
  );
}
