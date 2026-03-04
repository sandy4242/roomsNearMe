"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<unknown>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoadingUser(false);
    };

    getUser();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loadingUser) return null;

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`relative text-black transition duration-300 
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 
        after:transition-all after:duration-300
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg"
          : "bg-white/5 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logooo.png"
            alt="4Diwar Logo"
            width={45}
            height={15}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 text-sm tracking-wide">
          {navLink("/", "Home")}
          {navLink("/browse", "Browse")}
          {navLink(
            user ? "/list-property" : "/login?redirect=/list-property",
            "List Property",
          )}

          {user ? (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.reload();
              }}
              className="px-6 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-black hover:bg-white/20 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-black text-black hover:bg-white/20 transition-all"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white/20 backdrop-blur-2xl border-t border-white/30 shadow-2xl px-8 py-8">
          <div className="flex flex-col space-y-6 text-black text-base font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="relative w-fit transition duration-300 
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 
        after:w-0 hover:after:w-full after:transition-all"
            >
              Home
            </Link>

            <Link
              href="/browse"
              onClick={() => setIsOpen(false)}
              className="relative w-fit transition duration-300 
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 
        after:w-0 hover:after:w-full after:transition-all"
            >
              Browse
            </Link>

            <Link
              href={user ? "/list-property" : "/login?redirect=/list-property"}
              onClick={() => setIsOpen(false)}
              className="relative w-fit transition duration-300 
        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 
        after:w-0 hover:after:w-full after:transition-all"
            >
              List Property
            </Link>

            {user ? (
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.reload();
                }}
                className="text-left text-red-600"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-red-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
