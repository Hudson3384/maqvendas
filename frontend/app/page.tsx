import Footer from "@/components/ui/footer";
import ImageGrid from "@/components/ui/imageGrid";

export default function Home() {
  return (
    <div className="bg-gray-white">
      <section className="bg-white max-w-[1200px] flex flex-col m-auto">
        <div className="flex justify-center w-full">
          <h2 className="text-2xl mt-6 font-black uppercase">Conheça nossos parceiros</h2>
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 " />
        <ImageGrid />
      </section>
      <section className="bg-white max-w-[1200px] flex flex-col m-auto">
        <div className="flex justify-center w-full">
          <h2 className="text-2xl mt-6 font-black uppercase">Fale conosco</h2>
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 " />
        <div className=" flex md:flex-row flex-col flex-between text-base">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.170063683789!2d-49.20546717294896!3d-16.75142620307425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efab316d9f15b%3A0xc4ca9a098e2faf1f!2sRua%20Pe.%20Roque%20Continillo%20(01684)!5e0!3m2!1spt-BR!2sbr!4v1740770040228!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
          <div className="m-0 md:ml-10">
            <h3 className="font-bold">Estamos neste endereço:</h3>
            <div className="m-0 md:ml-10 md:mt-5">
              <ul>
                <li className="list-disc">Rua Padre Roque Continillo</li>
                <li className="list-disc">Quadra 13, Lote 06</li>
                <li className="list-disc">Parque Trindade 2, Aparecida de Goiânia, GO</li>
              </ul>
            </div>
            <h3 className="my-5 font-bold">Horário de funcionamento:</h3>
            <div className="m-0 md:ml-10">
              <ul>
                <li className="list-disc">Segunda<span className="ml-2">08:00 - 18:00</span></li>
                <li className="list-disc">Terça<span className="ml-2">08:00 - 18:00</span></li>
                <li className="list-disc">Quarta<span className="ml-2">08:00 - 18:00</span></li>
                <li className="list-disc">Quinta<span className="ml-2">08:00 - 18:00</span></li>
                <li className="list-disc">Sexta<span className="ml-2">08:00 - 18:00</span></li>
                <li className="list-disc">Sábado<span className="ml-2">08:00 - 12:00</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section >
      <section className="bg-gray-600 mt-5 md:h-min-450 py-10">
        <div className="flex justify-center">
          <h2 className="text-center text-2xl  font-bold text-white uppercase">Converse conosco a qualquer momento</h2>
        </div>
        <div className="flex justify-center">
          <button className="btn"></button>
        </div>
      </section>
      <Footer />
    </div >
  );

}
