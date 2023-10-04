import express from "express";
import PacienteController from "../controllers/pacienteController";

const router = express.Router();

router.post("/criar", PacienteController.criarPaciente);
router.get("/listar", PacienteController.listarPacientes);
router.put("/att/:id", PacienteController.atualizarPaciente);
router.delete("/del/:id", PacienteController.excluirPaciente);

export default router;
