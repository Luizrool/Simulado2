import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type DadosConsulta = {
  data: Date;
  nomePcente: string;
  nomeDents: string;
  pacienteId: number;
  secretariaId: number;
};

class ConsultaService {
  constructor(private readonly prisma: PrismaClient) {}

  async criarConsulta(dados: DadosConsulta) {
    try {
      await this.prisma.consulta.create({
        data: { ...dados },
      });
    } catch (error) {
      console.error("Erro ao criar consulta:", error);
      throw new Error("Erro ao criar consulta");
    }
  }

  async lerConsulta() {
    try {
      return await this.prisma.consulta.findMany();
    } catch (error) {
      console.error("Erro ao ler consultas:", error);
      throw new Error("Erro ao ler consultas");
    }
  }

  async atualizarConsulta(
    dados: { data: Date; nomePcente: string },
    id: number
  ) {
    try {
      return await this.prisma.consulta.update({
        where: { id },
        data: { ...dados },
      });
    } catch (error) {
      console.error("Erro ao atualizar consulta:", error);
      throw new Error("Erro ao atualizar consulta");
    }
  }

  async excluirConsulta(id: number) {
    try {
      await this.prisma.consulta.delete({ where: { id } });
    } catch (error) {
      console.error("Erro ao excluir consulta:", error);
      throw new Error("Erro ao excluir consulta");
    }
  }
}

export default new ConsultaService(prisma);
