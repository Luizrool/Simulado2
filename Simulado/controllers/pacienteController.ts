import { Request, Response } from "express";
import PacienteService from "../services/pacienteServices";

class PacienteController {
  async criarPaciente({ body }: Request, res: Response) {
    try {
      await PacienteService.criarPaciente(body);
      res.status(201).json({ message: "Paciente criado com sucesso!" });
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      res.status(500).json({ error: "Falha ao criar novo paciente." });
    }
  }

  async listarPacientes(_: Request, res: Response) {
    try {
      const pacientes = await PacienteService.lerPaciente();
      res.json(pacientes);
    } catch (error) {
      console.error("Erro ao listar pacientes:", error);
      res.status(500).json({ error: "Falha ao obter a lista de pacientes." });
    }
  }

  async atualizarPaciente({ params: { id }, body }: Request, res: Response) {
    try {
      const pacienteAtualizado = await PacienteService.atualizarPaciente(
        body,
        parseInt(id)
      );
      if (pacienteAtualizado) {
        res.json({ message: "Paciente atualizado com sucesso!" });
      } else {
        res.status(404).json({ error: "Paciente não localizado." });
      }
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
      res
        .status(500)
        .json({ error: "Falha ao atualizar informações do paciente." });
    }
  }

  async excluirPaciente({ params: { id } }: Request, res: Response) {
    try {
      await PacienteService.excluirPaciente(parseInt(id));
      res.json({ message: "Paciente removido com sucesso!" });
    } catch (error) {
      console.error("Erro ao excluir paciente:", error);
      res.status(500).json({ error: "Falha ao remover paciente." });
    }
  }
}

export default new PacienteController();
