
import Sidebar from "@/app/components/ui/Sidebar"
import Navbar  from "@/app/components/ui/Navbar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>

      </div>
    </div>
  )
}