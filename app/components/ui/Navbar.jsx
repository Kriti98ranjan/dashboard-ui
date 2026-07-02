import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-blue-950 text-white">
      <button>Menu</button>

      <div className="flex gap-3 ">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded text-black bg-white"
        />
        <button className="px-3 py-1 bg-blue-800 rounded-xl hover:bg-white hover:text-black">
          Search
        </button>
        <Link href="/dashboard/profile">
          <button className="px-3 py-1 bg-blue-800 rounded-xl hover:bg-white hover:text-black">
            Profile
          </button>
        </Link>
      </div>
    </header>
  );
}
