import express from "express";
import * as UsuarioController from "../controllers/UsuarioController";

// os métodos http vc vai definir aqui no roteador
// e aqui vc vai falar qual controller vai rodar p/ cada metodo http
const router = express.Router();
router.post("/usuarios", UsuarioController.createUsuario);
router.get("/usuarios", UsuarioController.listUsuario);

export default router;