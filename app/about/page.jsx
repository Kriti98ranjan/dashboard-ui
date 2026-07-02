import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-gray-800">
          Dashboard App
        </Link>
        <Link
          href="/dashboard"
          className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded"
        >Dashboard
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm bg-amber-400 px-6 py-2 rounded text-blue-600 hover:bg-white mb-6 inline-block">
          Back to Home
        </Link>

        <div className="flex-1">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">About Dashboard</h1>

            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 mb-4">
                This dashboard is built using <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
              </p>

              <h2 className="text-xl font-semibold mb-2">Features</h2>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Responsive Sidebar</li>
                <li>Reusable Navbar</li>
                <li>Reusable UI Components</li>
                <li>Cards, Buttons, Badges</li>
                <li>Modal Component</li>
                <li>Search Input</li>
              </ul>

              <div className="mt-6">
                <p className="text-gray-600">
                  Version: <strong>1.0.0</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-2.5  hover:bg-amber-600 rounded-lg">Open Dashboard
        </Link>
      </div>
    </div>
  );
}
