-- CreateTable
CREATE TABLE "lancamentos" (
    "id" SERIAL NOT NULL,
    "valor" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "time" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lancamentos_pkey" PRIMARY KEY ("id")
);
