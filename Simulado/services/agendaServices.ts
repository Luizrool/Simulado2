import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AgendaService {
  constructor(private readonly prisma: PrismaClient) {}

  async criarAgenda(dado: { data: Date; nomePcente: string }) {
    try {
      return await this.prisma.agenda.create({
        data: {
          data: dado.data,
          nomePcente: dado.nomePcente,
        },
      });
    } catch (error) {
      console.error("Erro ao criar agenda:", error);
      throw new Error("Erro ao criar agenda");
    }
  }

  async lerAgendas() {
    try {
      return await this.prisma.agenda.findMany();
    } catch (error) {
      console.error("Erro ao ler agendas:", error);
      throw new Error("Erro ao ler agendas");
    }
  }

  async obterAgendaPorId(id: number) {
    try {
      return await this.prisma.agenda.findUnique({ where: { id } });
    } catch (error) {
      console.error("Erro ao obter agenda por ID:", error);
      throw new Error("Erro ao obter agenda por ID");
    }
  }

  async atualizarAgenda(id: number, dados: { nomePcente: string }) {
    try {
      return await this.prisma.agenda.update({
        where: { id },
        data: {
          nomePcente: dados.nomePcente,
        },
      });
    } catch (error) {
      console.error("Erro ao atualizar agenda:", error);
      throw new Error("Erro ao atualizar agenda");
    }
  }

  async excluirAgenda(id: number): Promise<void> {
    try {
      await this.prisma.agenda.delete({ where: { id } });
    } catch (error) {
      console.error("Erro ao excluir agenda:", error);
      throw new Error("Erro ao excluir agenda");
    }
  }
}

export default new AgendaService(prisma);
