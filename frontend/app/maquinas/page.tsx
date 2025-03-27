import { listMachines } from "@/actions/machines";
import Header from "@/components/ui/header"

export default async function Machines() {
  const machines = await listMachines();

  return (
    <>
    <Header />
<div className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Nossas Máquinas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machines.map((machine) => (
          <div 
            key={machine.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{machine.title}</h2>
              <p className="text-neutral-600 text-sm mb-4">{machine.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm">
                  {machine.featured ? "Em destaque" : "Não em destaque"}
                </span>
                <span className="font-medium">
                  R$ {machine.price.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )

}
