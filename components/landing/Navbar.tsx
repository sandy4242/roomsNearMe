"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<unknown>(null);

  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    // Get current user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "relative after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:opacity-70";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-display tracking-wide transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Roomly
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-12 text-sm tracking-wide">

          <Link
            href="/"
            className={`${linkStyle} ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/browse"
            className={`${linkStyle} ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Browse
          </Link>

          {/* Smart List Property */}
          <Link
            href={
              user
                ? "/list-property"
                : "/login?redirect=/list-property"
            }
            className={`${linkStyle} ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            List Property
          </Link>

          {/* Login / Logout */}
          {user ? (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.reload();
              }}
              className={`px-6 py-2 border transition duration-300 ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`px-6 py-2 border transition duration-300 ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Login
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}