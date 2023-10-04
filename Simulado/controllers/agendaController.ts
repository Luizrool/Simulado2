import { Request, Response } from "express";
import AgendaService from "./services/agendaServices";

class AgendaController {
  // Cria uma nova agenda
  async criarAgenda(req: Request, res: Response) {
    try {
      const novaAgenda = await AgendaService.criarAgenda(req.body);
      return res.status(201).json(novaAgenda);
    } catch (error) {
      return this.handleServerError(res, error);
    }
  }

  // Lê todas as agendas
  async lerAgendas(req: Request, res: Response) {
    try {
      const agendas = await AgendaService.lerAgendas();
      return res.json(agendas);
    } catch (error) {
      return this.handleServerError(res, error);
    }
  }

  // Obtém uma agenda específica pelo ID
  async obterAgendaPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const agenda = await AgendaService.obterAgendaPorId(parseInt(id));
      if (agenda) {
        return res.json(agenda);
      }
      return res.status(404).json({ error: "Agenda não encontrada." });
    } catch (error) {
      return this.handleServerError(res, error);
    }
  }

  // Atualiza uma agenda específica
  async atualizarAgenda(req: Request, res: Response) {
    const { id } = req.params;
    const { data } = req.body;
    try {
      const agendaAtualizada = await AgendaService.atualizarAgenda(
        parseInt(id),
        data
      );
      return res.json(agendaAtualizada);
    } catch (error) {
      return this.handleServerError(res, error);
    }
  }

  // Exclui uma agenda específica
  async excluirAgenda(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await AgendaService.excluirAgenda(parseInt(id));
      return res.json({ message: "Agenda excluída com sucesso." });
    } catch (error) {
      return this.handleServerError(res, error);
    }
  }

  // Método auxiliar para lidar com erros do servidor
  private handleServerError(res: Response, error: any) {
    return res.status(500).json({ status: "error", message: error.message });
  }
}

export default new AgendaController();
