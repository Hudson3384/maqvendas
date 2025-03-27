import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Icons } from "@/components/ui/icons";
import ImageGrid from "@/components/ui/imageGrid";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Header />
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main-image.webp"
            alt="MaqVendas Pavimentação"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-[1200px] mx-auto px-4 flex flex-col justify-center z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
              Especialista em pavimentação asfáltica
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-yellow-500" />
              <span className="text-yellow-500 text-lg font-medium">CBUQ e Micro</span>
            </div>
            <p className="text-neutral-300 text-lg md:text-xl mb-8">
              16 anos de trabalho e excelência em pavimentação
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5562983011001&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20*MaqVendas*%20https%3A%2F%2Fwww.maqvendas.com.br" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <Icons.whatsapp className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
              <a 
                href="/#onde-estamos"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <Icons.location className="w-5 h-5" />
                <span>Nossa Localização</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
              Nossos Parceiros
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-[2px] w-16 bg-yellow-500" />
              <span className="text-yellow-500 text-sm font-medium">Marcas de Qualidade</span>
            </div>
          </div>
          <ImageGrid />
        </div>
      </section>

      {/* Location and Hours Section */}
      <section id="onde-estamos" className="bg-white py-12 md:pb-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">
              Onde estamos
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-2/3">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.170063683789!2d-49.20546717294896!3d-16.75142620307425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efab316d9f15b%3A0xc4ca9a098e2faf1f!2sRua%20Pe.%20Roque%20Continillo%20(01684)!5e0!3m2!1spt-BR!2sbr!4v1740770040228!5m2!1spt-BR!2sbr" 
                className="w-full h-[450px] rounded-2xl shadow-sm border border-neutral-100"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="w-full md:w-1/3 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-6">Estamos neste endereço:</h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600 transition-colors"></span>
                    Rua Padre Roque Continillo
                  </li>
                  <li className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600 transition-colors"></span>
                    Quadra 13, Lote 06
                  </li>
                  <li className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600 transition-colors"></span>
                    Parque Trindade 2, Aparecida de Goiânia, GO
                  </li>
                </ul>
              </div>
              <div id="horarios">
                <h3 className="text-lg font-medium text-neutral-800 mb-6">Horário de funcionamento:</h3>
                <ul className="space-y-3 text-neutral-600">
                  {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((day) => (
                    <li key={day} className="flex justify-between items-center group">
                      <span className="group-hover:text-neutral-800 transition-colors">{day}</span>
                      <span className="group-hover:text-neutral-800 transition-colors">08:00 - 18:00</span>
                    </li>
                  ))}
                  <li className="flex justify-between items-center group">
                    <span className="group-hover:text-neutral-800 transition-colors">Sábado</span>
                    <span className="group-hover:text-neutral-800 transition-colors">08:00 - 12:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="fale-conosco" className="bg-neutral-900 py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">
            Precisa de ajuda?
          </h2>
          <p className="text-neutral-300 text-base mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível 24 horas por dia, 7 dias por semana para melhor atendê-lo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5562983011001&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20*MaqVendas*%20https%3A%2F%2Fwww.maqvendas.com.br" 
              target="_blank"
              className="w-full sm:w-auto"
            >
              <button className="w-full flex sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-500 text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]">
                <Icons.whatsapp className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
            </a>
            <a 
              href="mailto:contato@maqvendas.com.br"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Enviar e-mail</span>
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}
