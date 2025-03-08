"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">EcommerceHub</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/products"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Deals
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full bg-gray-100 pl-8 rounded-full focus-visible:ring-gray-300"
            />
          </div>
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold">EcommerceHub</span>
                  </Link>
                </div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full bg-gray-100 pl-8 rounded-md"
                  />
                </div>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Products
                  </Link>
                  <Link
                    href="/categories"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Categories
                  </Link>
                  <Link
                    href="/deals"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Deals
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                  <Link
                    href="/account"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    My Account
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
