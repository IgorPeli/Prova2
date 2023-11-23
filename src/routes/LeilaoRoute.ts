import express from "express";
import * as LeilaoController from "../controllers/LeilaoController";

// os métodos http vc vai definir aqui no roteador
// e aqui vc vai falar qual controller vai rodar p/ cada metodo http
const router = express.Router();
router.post("/leilao", LeilaoController.createLeilao);


export default router;