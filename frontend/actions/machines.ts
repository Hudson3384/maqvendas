import prisma from "@/lib/prisma";

async function createMachine  () {

}

async function listMachines() {
  const machines = await prisma.machine.findMany();
  return machines;
 } 

export { createMachine, listMachines };