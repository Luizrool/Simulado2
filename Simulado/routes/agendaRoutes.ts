import express from "express";
import AgendaController from "../controllers/agendaController";

const router = express.Router();

router.post("/criar", AgendaController.criarAgenda);
router.get("/ler", AgendaController.lerAgendas);
router.get("/obter:id", AgendaController.obterAgendaPorId);
router.put("/att/:id", AgendaController.atualizarAgenda);
router.delete("/del/:id", AgendaController.excluirAgenda);

export default router;
