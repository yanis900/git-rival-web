import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Home, Menu, MessageSquare, Swords, Users } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-3xl font-bold text-primary font-[family-name:var(--font-alagard)]">
            GitRival
          </Link>
          {/* <Input
            className="w-64 hidden md:inline-flex"
            placeholder="Search..."
          /> */}
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href={"/"}>
            <Button variant="ghost" size={'icon'}>
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"/battle"}>
            <Button variant="ghost" size={'icon'}>
              <Swords className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"/network"} onClick={(e) => { e.preventDefault()  }}>
            <Button variant="ghost" size={'icon'} disabled>
              <Users className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"/"} onClick={(e) => { e.preventDefault()  }}>
            <Button variant="ghost" size={'icon'} disabled>
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={"/"} onClick={(e) => { e.preventDefault()  }}>
            <Button variant="ghost" size={'icon'} disabled>
              <Bell className="h-5 w-5" />
            </Button>
          </Link>

          <UserButton />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <Link href={"/"} className="w-full justify-start">
                <Button variant="ghost">
                  <Home className="mr-2 h-5 w-5" />
                  Home
                </Button>
              </Link>
              <Link href={"/battle"} className="w-full justify-start">
                <Button variant="ghost">
                  <Swords className="mr-2 h-5 w-5" />
                  Battle
                </Button>
              </Link>
              <Link href={"/network"} className="w-full justify-start">
                <Button variant="ghost" disabled>
                  <Users className="mr-2 h-5 w-5" />
                  Network
                </Button>
              </Link>
              <Link href={"/"} className="w-full justify-start">
                <Button variant="ghost" disabled>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Messages
                </Button>
              </Link>
              <Link href={"/"} className="w-full justify-start">
                <Button variant="ghost" disabled>
                  <Bell className="mr-2 h-5 w-5" />
                  Notifications
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
