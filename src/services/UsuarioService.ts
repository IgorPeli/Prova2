import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUsuario(nome: string, email: string){
    return await prisma.usuario.create({data: {nome: nome, email: email}})
}

export async function listUsuario(){
    return await prisma.usuario.findMany();
}