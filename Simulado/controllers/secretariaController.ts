import { Request, Response } from "express";
import SecretariaService from "../services/secretariaServices";

class SecretariaController {
  async criarSecretaria(req: Request, res: Response) {
    try {
      await SecretariaService.criarSecretaria(req.body);
      res.status(201).send({ message: "Secretária criada com sucesso." });
    } catch (error) {
      this._handleError(res, "Erro ao criar secretária.", error);
    }
  }

  async listarSecretarias(req: Request, res: Response) {
    try {
      const secretarias = await SecretariaService.lerSecretaria();
      res.send(secretarias);
    } catch (error) {
      this._handleError(res, "Erro ao obter secretárias.", error);
    }
  }

  async atualizarSecretaria(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const secretariaAtualizada = await SecretariaService.atualizarSecretaria(
        req.body,
        Number(id)
      );
      if (secretariaAtualizada) {
        res.send({ message: "Secretária atualizada com sucesso." });
      } else {
        res.status(404).send({ error: "Secretária não encontrada." });
      }
    } catch (error) {
      this._handleError(res, "Erro ao atualizar secretária.", error);
    }
  }

  async excluirSecretaria(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await SecretariaService.excluirSecretaria(Number(id));
      res.send({ message: "Secretária excluída com sucesso." });
    } catch (error) {
      this._handleError(res, "Erro ao excluir secretária.", error);
    }
  }

  private _handleError(res: Response, message: string, error: any) {
    console.error(error);
    res.status(500).send({ error: message });
  }
}

export default new SecretariaController();
