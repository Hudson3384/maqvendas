'use client'

import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"

export default function AdminLogin() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/admin/dashboard')
    }
  }, [session, router])

  return (
    <>
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative w-48 h-24">
              <Image
                src="/maqvendas.png"
                alt="MaqVendas Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-light text-white">
              Área Administrativa
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              Faça login para acessar o painel
            </p>
          </div>

          {/* Login Button */}
          <div className="mt-8">
            <button
              onClick={() => signIn('google', { callbackUrl: '/admin/dashboard' })}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Entrar com Google
            </button>
          </div>

          {status === 'loading' && (
            <div className="text-center text-sm text-neutral-400">
              Carregando...
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}