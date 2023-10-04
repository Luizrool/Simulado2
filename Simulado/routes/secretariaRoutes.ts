import express from "express";
import SecretariaController from "../controllers/secretariaController";

const router = express.Router();

router.post("/criar", SecretariaController.criarSecretaria);
router.get("/listar", SecretariaController.listarSecretarias);
router.put("/att/:id", SecretariaController.atualizarSecretaria);
router.delete("/del/:id", SecretariaController.excluirSecretaria);

export default router;
