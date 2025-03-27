import AuthProvider from "@/providers/authprovider"

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
  <AuthProvider>
  {children}
  </AuthProvider>
  )
}
