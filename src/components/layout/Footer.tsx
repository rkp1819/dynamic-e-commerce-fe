"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium">EcommerceHub</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your one-stop shop for all your shopping needs. Quality products,
              fair prices, and fast delivery.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Shop</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link
                href="/products"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                All Products
              </Link>
              <Link
                href="/categories"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Deals & Offers
              </Link>
              <Link
                href="/new-arrivals"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                New Arrivals
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Account</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link
                href="/account"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                My Account
              </Link>
              <Link
                href="/account/orders"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Order History
              </Link>
              <Link
                href="/cart"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Shopping Cart
              </Link>
              <Link
                href="/wishlist"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Wishlist
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>123 Commerce St, Marketville, MV 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-500" />
                <span>support@ecommercehub.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600">
              &copy; {new Date().getFullYear()} EcommerceHub. All rights
              reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
