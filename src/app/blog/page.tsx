"use client";

import { useEffect, useState } from "react";

interface Comment {
  name: string;
  email: string;
  text: string;
}

export default function BlogPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("comments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-blue-50 shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
           Comments
        </h1>

        {comments.length === 0 ? (
          <p className="text-gray-600 text-center">
            No comments yet. Go back and add some!
          </p>
        ) : (
          <ul className="space-y-3">
            {comments.map((c, i) => (
              <li
                key={i}
                className="border border-blue-200 p-3 rounded-lg shadow-sm bg-white"
              >
                <p className="font-bold text-blue-700">
                  {c.name} <span className="text-black-500">({c.email})</span>
                </p>
                <p className="text-gray-700">{c.text}</p>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-center text-blue-700">
          <a href="/" className="font-semibold underline">← Back to Home</a>
        </p>
      </div>
    </div>
  );
}
