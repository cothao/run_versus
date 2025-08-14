"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { handleSubmit } from "@/hooks/verify";

export default function Home() {
  // Form state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center py-16">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-[#282041]">
            Sign in
          </h2>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              handleSubmit(userName, password);
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-1`}
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-1 ${"border-gray-300 focus:ring-[#282041]"}`}
                />
              </div>
            </div>
            <div className="mb-6">
              <Link
                href="/forgot-password"
                className="text-[#0696dd] text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center py-2 px-4 rounded-md transition-colors ${"bg-[#282041] hover:bg-opacity-90 text-white"}`}
            >
              Log in
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
