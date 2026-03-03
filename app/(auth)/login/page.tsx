"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    // Redirect AFTER successful login
    router.push(redirectTo);
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src="/anmol-seth.jpg"
          alt="Luxury Home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-20 left-10 text-white z-10">
          <h2 className="text-4xl font-bold mb-4">
            Find your sweet home
          </h2>
          <p className="text-lg text-gray-200">
            Schedule visits in just a few clicks
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">

          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800">
              Roomly
            </h1>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mb-8">
            Sign in to your account
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <p className="text-sm text-center mt-6 text-gray-500">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-black underline">
              Register
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}