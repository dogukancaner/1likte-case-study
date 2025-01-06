"use client";

import { Globe, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link className="text-white text-2xl font-bold" href="/">
            <Image
              src="/icons/birlikte.svg"
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>
          <span className="text-white">|</span>
          <span className="text-white font-light">Eğitim</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white">
                <Globe className="mr-2 h-4 w-4" />
                Türkçe
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Türkçe</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-white hover:text-gray-300 cursor-pointer">
            Giriş Yap
          </span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-black text-white">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium">Dil Seçimi</h3>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="justify-start text-white hover:text-black"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Türkçe
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-white hover:text-black"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      English
                    </Button>
                  </div>
                </div>
                <Button className="bg-white text-black hover:bg-gray-200 mt-4">
                  Giriş Yap
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
