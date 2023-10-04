import { Request, Response } from "express";
import ConsultaService from "../services/consultaServices";

class ConsultaController {
  async criarConsulta({ body }: Request, res: Response) {
    try {
      await ConsultaService.criarConsulta(body);
      res.status(201).json({ message: "Consulta criada com sucesso." });
    } catch (error) {
      this.handleError(res, error, "Erro ao criar consulta.");
    }
  }

  async lerConsultas(_req: Request, res: Response) {
    try {
      const consultas = await ConsultaService.lerConsulta();
      res.json(consultas);
    } catch (error) {
      this.handleError(res, error, "Erro ao obter consultas.");
    }
  }

  async atualizarConsulta({ params, body }: Request, res: Response) {
    try {
      const consultaAtualizada = await ConsultaService.atualizarConsulta(
        body,
        parseInt(params.id)
      );
      if (consultaAtualizada) {
        res.json({ message: "Consulta atualizada com sucesso." });
      } else {
        res.status(404).json({ error: "Consulta não encontrada." });
      }
    } catch (error) {
      this.handleError(res, error, "Erro ao atualizar consulta.");
    }
  }

  async excluirConsulta({ params }: Request, res: Response) {
    try {
      await ConsultaService.excluirConsulta(parseInt(params.id));
      res.json({ message: "Consulta excluída com sucesso." });
    } catch (error) {
      this.handleError(res, error, "Erro ao excluir consulta.");
    }
  }

  private handleError(res: Response, error: any, defaultMessage: string) {
    console.error(error);
    res.status(500).json({ error: defaultMessage });
  }
}

export default new ConsultaController();
