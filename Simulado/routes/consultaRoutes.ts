import express from "express";
import ConsultaController from "../controllers/consultaController";

const router = express.Router();

router.post("/criar", ConsultaController.criarConsulta);
router.get("/ler", ConsultaController.lerConsultas);
router.put("/att/:id", ConsultaController.atualizarConsulta);
router.delete("/del/:id", ConsultaController.excluirConsulta);

export default router;
