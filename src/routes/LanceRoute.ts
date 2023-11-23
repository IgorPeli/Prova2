import express from "express";
import * as LanceController from "../controllers/LanceController";

// os métodos http vc vai definir aqui no roteador
// e aqui vc vai falar qual controller vai rodar p/ cada metodo http
const router = express.Router();
router.post("/lance", LanceController.createLance);


export default router;