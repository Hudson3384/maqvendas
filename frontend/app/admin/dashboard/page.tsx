'use client'

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-yellow-500">Carregando...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light">Painel Administrativo</h1>
          <button
            onClick={() => signOut({ callbackUrl: '/admin' })}
            className="px-4 py-2 text-sm font-medium text-neutral-900 bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            Sair
          </button>
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-neutral-900 font-bold">
              {session.user?.email?.[0]?.toUpperCase() || 'A'}
            </div>
            <div>
              <div className="font-medium">{session.user?.name || 'Administrador'}</div>
              <div className="text-sm text-neutral-400">{session.user?.email}</div>
            </div>
          </div>
          
          {/* Add your dashboard content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Produtos</h3>
              <p className="text-neutral-400">Gerencie seus produtos</p>
            </div>
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Categorias</h3>
              <p className="text-neutral-400">Organize suas categorias</p>
            </div>
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Configurações</h3>
              <p className="text-neutral-400">Ajuste as configurações do site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
