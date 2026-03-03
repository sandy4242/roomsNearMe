"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const supabase = createClient();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Check your email to confirm your account.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src="/rakabtw.jpg"
          alt="Modern Property"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="absolute bottom-20 left-10 text-white z-10">
          <h2 className="text-4xl font-bold mb-4">
            Start your property journey
          </h2>
          <p className="text-lg text-gray-200">
            List or find your perfect space in Sikkim
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800">
              Roomly
            </h1>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 mb-8">
            Join and explore verified listings
          </p>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-gray-700    "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-gray-700    "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Create Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-gray-700    "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* OAuth Buttons
          <button className="w-full border py-3 rounded-lg mb-3 hover:bg-gray-50 transition">
            Continue with Google
          </button>

          <button className="w-full border py-3 rounded-lg hover:bg-gray-50 transition">
            Continue with Facebook
          </button> */}

          {/* Login Link */}
          <p className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}