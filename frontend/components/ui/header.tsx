"use client"
import Link from "next/link"
import { Icons } from "./icons"
import Image from "next/image"
import Navbar from "./navbar"

const TopBar = () => {
  return (
    <div className="bg-gray-300 w-full flex md:justify-center py-5">
      <div className="md:container md:h-45 md:flex md:align-center md:justify-between md:flex-row flex-col">
        <div className="md:h-full flex md:justify-start align-center md:flex-1 justify-center">
          <Link href="/">
            <Image
              src="/maqvendas.png"
              width="200"
              height="100"
              alt="Official Logo MaqVendas website"
            />
          </Link>
        </div>
        <div className="w-100 flex flex-col gap-2 py-2 md:py-0">
          <div className="flex  gap-2 md:justify-between justify-start">
            <Icons.location width="35" className="hidden md:block" />
            <div className="flex flex-col align-center justify-center text-gray-600 uppercase text-base px-2 md:px-0">
              <span className="inline">Rua Padre Roque Continillo, Quadra 13 lote 06.
              </span>
              <span>
                Parque trindade 2, Aparecida de Goiânia, GO.
              </span>
            </div>
          </div>
          <div className="border-b-2 border-gray-400" />
          <div className="flex gap-2 flex-col md:flex-row px-4 md:px-0">
            <div className="flex md:flex-2 flex-1 align-center gap-2 w-full">
              <a
                className="inline-block bg-green-400 px-6 py-2 md:px-2 rounded-full w-full"
                href="https://api.whatsapp.com/send?phone=5562983011001&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20*MaqVendas*%20https%3A%2F%2Fwww.maqvendas.com.br"
                target="_blank"
              >
                <div className="flex align-center text-black-900 uppercase text-base gap-2  justify-center font-bold items-center mr-7">
                  <Icons.whatsapp width="35" />
                  Fale Conosco
                </div>
              </a>
            </div>
            <div className="md:flex-1 w-full">
              <a
                target="_blank"
                className="inline-block bg-white px-6 md:px-2 py-2 rounded-full w-full"
                href="https://www.instagram.com/_maqvendas/"
              >
                <div className="flex align-center text-black-900 uppercase text-base gap-4 md:gap-6  justify-center font-bold items-center gap-4 md:gap-0">
                  <Icons.instagram width="35" />
                  Seguir
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


const Header = () => {
  return (
    <header className="w-full">
      <TopBar />
      <Navbar />
    </header>
  )
}

export default Header
