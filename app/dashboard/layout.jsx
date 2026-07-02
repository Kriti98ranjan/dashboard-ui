// YE FILE HAI JO SIDEBAR + NAVBAR WRAP KARTI HAI
// Sirf /dashboard aur /dashboard/* pe apply hoga
// Server Component hai

import Sidebar from "@/app/components/ui/Sidebar"
import Navbar  from "@/app/components/ui/Navbar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Day 1 Sidebar — left pe */}
      <Sidebar />

      {/* Right side */}
      <div className="flex-1 flex flex-col">

        {/* Day 1 Navbar — upar */}
        <Navbar />

        {/* Yahan page ka content aayega
            /dashboard      → dashboard/page.jsx
            /dashboard/profile → dashboard/profile/page.jsx
            Dono yahan {children} mein aate hain automatically */}
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>

      </div>
    </div>
  )
}