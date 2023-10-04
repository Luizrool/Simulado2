import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PacienteService {
  constructor(private readonly prismaService: PrismaClient = prisma) {}

  async criarPaciente({ nomePcente, senha, usuario }: any) {
    try {
      return await this.prismaService.paciente.create({
        data: {
          nomePcente,
          senha,
          usuario,
        },
      });
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      throw new Error("Falha ao criar paciente.");
    }
  }

  async lerPaciente() {
    try {
      return await this.prismaService.paciente.findMany();
    } catch (error) {
      console.error("Erro ao listar pacientes:", error);
      throw new Error("Falha ao obter a lista de pacientes.");
    }
  }

  async atualizarPaciente({ nomePcente, senha, usuario }: any, id: number) {
    try {
      return await this.prismaService.paciente.update({
        where: { id },
        data: {
          nomePcente,
          senha,
          usuario,
        },
      });
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
      throw new Error("Falha ao atualizar informações do paciente.");
    }
  }

  async excluirPaciente(id: number) {
    try {
      return await this.prismaService.paciente.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Erro ao excluir paciente:", error);
      throw new Error("Falha ao remover paciente.");
    }
  }
}

export default new PacienteService();
