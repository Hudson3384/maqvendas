'use client'

import { signOutUser } from "@/app/actions/auth"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative w-32 h-16">
                <Image
                  src="/maqvendas.png"
                  alt="MaqVendas Logo"
                  fill
                  className="object-contain invert"
                  priority
                />
              </div>
            </div>
            <form action={signOutUser}>
              <button
                type="submit"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-light text-neutral-800">
            Painel Administrativo
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Bem-vindo ao painel administrativo do MaqVendas.
          </p>
        </div>
      </main>
    </div>
  )
} 