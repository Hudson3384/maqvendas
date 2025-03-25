"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4">
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link 
            href="/" 
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            prefetch={false}
          >
            Home
          </Link>
          <Link 
            href="/#onde-estamos" 
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            prefetch={false}
          >
            Onde estamos
          </Link>
          <Link 
            href="/#horarios" 
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            prefetch={false}
          >
            Nossos horários
          </Link>
          <Link 
            href="/#fale-conosco" 
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            prefetch={false}
          >
            Fale conosco
          </Link>
          <Link 
            href="/maquinas" 
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            prefetch={false}
          >
            Máquinas
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="fixed right-4 top-4 z-50 rounded-full hover:bg-neutral-100"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <Link 
                href="/" 
                className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                prefetch={false}
              >
                Home
              </Link>
              <Link 
                href="/#onde-estamos" 
                className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                prefetch={false}
              >
                Onde estamos
              </Link>
              <Link 
                href="/#horarios" 
                className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                prefetch={false}
              >
                Nossos horários
              </Link>
              <Link 
                href="/#fale-conosco" 
                className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                prefetch={false}
              >
                Fale conosco
              </Link>
              <Link 
                href="/maquinas" 
                className="text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                prefetch={false}
              >
                Máquinas
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {}

function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
