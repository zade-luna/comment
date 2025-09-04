"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-12">
      <div className="max-w-4xl mx-auto text-center text-sm">
        © {new Date().getFullYear()}  All copyright reserved.
      </div>
    </footer>
  );
}
