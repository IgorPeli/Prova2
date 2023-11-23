import * as LanceService from "../services/LanceService";
import {Request, Response} from "express";
// só filtra/verifica/valida os dados e chama o service
// o service cria as coisas no banco
export async function createLance(req: Request, res: Response){
   const { valor , compradorId, leilaoId } = req.body;
    const lance = await LanceService.createLance(valor, compradorId, leilaoId );
    return res.status(200).json({lance: lance});
}