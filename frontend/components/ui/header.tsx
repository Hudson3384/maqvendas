import Link from "next/link"
import { Icons } from "./icons"
import Image from "next/image"
import Navbar from "./navbar"

const TopBar = () => {
  return (
    <div className="bg-neutral-900 w-full py-4 block">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/maqvendas.png"
                width={180}
                height={90}
                alt="Official Logo MaqVendas website"
                className="transition-opacity hover:opacity-90 invert brightness-0"
              />
            </Link>
          </div>

          {/* Contact and Social Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            {/* Address */}
            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <Icons.location className="w-6 h-6 text-yellow-500" />
              <div className="flex flex-col">
                <span>Rua Padre Roque Continillo, Quadra 13 lote 06</span>
                <span>Parque trindade 2, Aparecida de Goiânia, GO</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=5562983011001&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20*MaqVendas*%20https%3A%2F%2Fwww.maqvendas.com.br"
                target="_blank"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-yellow-500 text-neutral-900 px-6 py-2.5 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <Icons.whatsapp className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/_maqvendas/"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-neutral-800 text-white px-6 py-2.5 rounded-full font-medium hover:bg-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <Icons.instagram className="w-5 h-5" />
                <span>Seguir</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="w-full block bg-white/80 backdrop-blur-md border-b border-neutral-100 relative z-50">
      <div className="md:hidden">
        <Navbar />
      </div>
      <TopBar />
      <div className="hidden md:block">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
