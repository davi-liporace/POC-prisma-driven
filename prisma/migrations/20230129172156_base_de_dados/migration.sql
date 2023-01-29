-- CreateTable
CREATE TABLE "descontos" (
    "id" SERIAL NOT NULL,
    "desconto" INTEGER NOT NULL,
    "lancamentoId" INTEGER NOT NULL,

    CONSTRAINT "descontos_pkey" PRIMARY KEY ("id")
);
