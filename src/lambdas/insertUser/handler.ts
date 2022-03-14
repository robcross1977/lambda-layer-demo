import { createPrismaClient } from "@libs/createPrismaClient";
import { v4 as uuidv4 } from "uuid";

const handler = async (): Promise<void> => {
  const prisma = createPrismaClient();

  try {
    await prisma.user.create({
      data: { uuid: uuidv4() },
    });
  } catch (e) {
    console.error(e);
  } finally {
    prisma.$disconnect();
  }
};

export default handler;
