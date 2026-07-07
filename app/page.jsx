import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-300">
      
      {/* Simple top navbar */}

      <nav className="bg-purple-50 border-b px-8 py-4 flex justify-between items-center">
        <span className="font-bold text-gray-800">Dashboard App</span>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="text-sm  hover:bg-blue-700 bg-amber-200 rounded px-4 py-1.5"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center py-30 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Dashboard App
        </h1>
        <p className="text-fuchsia-500 mb-8 max-w-md text-xl font-bold">
          TailwindCSS + UI System Basics
        </p>
        <div className="flex gap-3">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700"
          >
            Open Dashboard
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 px-6 py-2.5 rounded-lg hover:bg-amber-200"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
