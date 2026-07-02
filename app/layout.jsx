// SIRF html aur body — kuch nahi
// Sidebar/Navbar yahan nahi hoga
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}