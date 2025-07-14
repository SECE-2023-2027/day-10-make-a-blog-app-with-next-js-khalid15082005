'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-indigo-700">
          📝 BlogSphere
        </div>
        <nav className="mt-2 md:mt-0 flex gap-6 text-sm text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/add" className="hover:text-indigo-600">Add Blog</Link>
          <Link href="#" className="hover:text-indigo-600">About</Link>
        </nav>
      </div>
    </header>
  );
}
