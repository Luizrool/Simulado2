import { PrismaClient } from "@prisma/client";

const prismaInstance = new PrismaClient();

class SecretariaService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async criarSecretaria(dados: { nome: string; RG: string }) {
    try {
      return await this.prisma.secretaria.create({
        data: {
          nome: dados.nome,
          RG: dados.RG,
        },
      });
    } catch (error) {
      console.error("Erro ao criar secretaria:", error);
      throw error;
    }
  }

  async lerSecretaria() {
    try {
      return await this.prisma.secretaria.findMany();
    } catch (error) {
      console.error("Erro ao ler secretarias:", error);
      throw error;
    }
  }

  async atualizarSecretaria(dados: { nome: string; RG: string }, id: number) {
    try {
      return await this.prisma.secretaria.update({
        where: { id },
        data: dados,
      });
    } catch (error) {
      console.error("Erro ao atualizar secretaria:", error);
      throw error;
    }
  }

  async excluirSecretaria(id: number) {
    try {
      return await this.prisma.secretaria.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Erro ao excluir secretaria:", error);
      throw error;
    }
  }
}

export default new SecretariaService(prismaInstance);
