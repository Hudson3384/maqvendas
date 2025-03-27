"use client"
import Link from "next/link"
import { Icons } from "./icons"

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">MaqVendas</h3>
            <p className="text-sm">
              Especialistas em pavimentação asfáltica com mais de 16 anos de experiência no mercado.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_maqvendas/"
                target="_blank"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Icons.instagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5562983011001"
                target="_blank"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Icons.whatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-sm">
              {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((day) => (
                <li key={day} className="flex justify-between items-center">
                  <span>{day}</span>
                  <span>08:00 - 18:00</span>
                </li>
              ))}
              <li className="flex justify-between items-center">
                <span>Sábado</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Localização</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Icons.location className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p>Rua Padre Roque Continillo</p>
                  <p>Quadra 13, Lote 06</p>
                  <p>Parque Trindade 2</p>
                  <p>Aparecida de Goiânia, GO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Contato</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://api.whatsapp.com/send?phone=5562983011001"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Icons.whatsapp className="w-5 h-5 text-yellow-500" />
                <span>(62) 98301-1001</span>
              </a>
              <a
                href="mailto:contato@maqvendas.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Icons.mail className="w-5 h-5 text-yellow-500" />
                <span>contato@maqvendas.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()} MaqVendas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
