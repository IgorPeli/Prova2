import { PrismaClient } from "@prisma/client";
import internal from "stream";

const prisma = new PrismaClient();

export async function createLance(valor: number, compradorId: number, leilaoId: number){
    return await prisma.lance.create({data: {valor: valor, compradorId: compradorId, leilaoId: leilaoId}})
}

