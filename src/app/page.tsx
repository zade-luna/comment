"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Comment {
  name: string;
  email: string;
  text: string;
}

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !text) {
      alert("All fields must be filled!");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must include @");
      return;
    }

    const newComment: Comment = { name, email, text };
    setComments([...comments, newComment]);

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-black-50 shadow-lg rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
            Leave a Comment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              placeholder="Your Name  font-bold text-blue-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-black-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border bg-gray-300- rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>

          <p className="mt-6 text-center text-blue-700">
            Go to <a href="/blog" className="font-semibold underline">comment</a> to see all comments.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
 