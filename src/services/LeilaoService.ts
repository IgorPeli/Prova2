import { PrismaClient } from "@prisma/client";
import internal from "stream";

const prisma = new PrismaClient();

export async function createLeilao(produto: string , datalimite: Date, preco: number, donoId: number){
    return await prisma.leilao.create({data: {produto: produto , datalimite: datalimite, preco: preco, donoId: donoId}})
}

