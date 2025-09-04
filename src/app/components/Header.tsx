"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className=" flex justify-between items-center px-3">
        <h1 className="text-xl font-bold">Feed back </h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/blog" className="hover:underline">Comment</Link>
        </nav>
      </div>
    </header>
  );
}
