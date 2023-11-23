import * as LeilaoService from "../services/LeilaoService";

import { Request, Response } from "express";

export async function createLeilao(req: Request, res: Response){
   const { email, produto, preco, datalimite } = req.body;
   const leiloes = await LeilaoService.createLeilao(email, produto, preco, datalimite );
   return res.status(200).json({leiloes: leiloes});
}

   
