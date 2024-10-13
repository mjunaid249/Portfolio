import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import ModeToggle from "./toggle";
const Navbar = () => {
  return (
    <header
      id="header"
      className="z-20 sticky top-0 flex h-16 items-center gap-4 border-b  px-4 md:px-6 backdrop-blur-lg"
    >
      <nav className="hidden items-center flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="text-foreground text-xl font-bold transition-colors hover:text-foreground"
        >
          Porfolio
        </Link>
        <Link
          href="#home"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Services
        </Link>
        <Link
          href="#tools"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Tools
        </Link>
        <Link
          href="#contact"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="hover:text-foreground">
              Porfolio
            </Link>
            <Link
              href="#home"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#tools"
              className="text-muted-foreground hover:text-foreground"
            >
              Tools
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="absolute right-3 px-4">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
