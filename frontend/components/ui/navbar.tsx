import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <div className="bg-background text-foreground sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <nav className="hidden md:flex md:items-center md:gap-6 text-base font-sans">
          <Link href="/" className="text-md font-sans font-bold hover:text-gray-700 duration-300 ease-in" prefetch={false}>
            Home
          </Link>
          <Link href="/sobre" className="text-md font-sans font-bold hover:text-gray-700 duration-300 ease-in" prefetch={false}>
            Sobre
          </Link>
          <Link href="/contato" className="text-md font-sans font-bold hover:text-gray-700 duration-300 ease-in" prefetch={false}>
            Contato
          </Link>
          <Link href="/maquinas" className="text-md font-sans font-bold hover:text-gray-700 duration-300 ease-in" prefetch={false}>
            Nossas máquinas
          </Link>
        </nav>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full fixed z-500 top-0">
              <MenuIcon className="h-25 w-25" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-6">
              <Link href="/" className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                Home
              </Link>
              <Link href="/sobre" className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                Sobre
              </Link>
              <Link href="#" className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                Contato
              </Link>
              <Link href="#" className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                Nossas máquinas
              </Link>
              {/*<Link href="#" className="text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  Avaliação
                </Link>*/}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

function MenuIcon(props) {
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


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
