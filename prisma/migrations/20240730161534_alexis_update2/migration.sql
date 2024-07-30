-- CreateTable
CREATE TABLE "resena" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "libroId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "resena_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "resena" ADD CONSTRAINT "resena_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resena" ADD CONSTRAINT "resena_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
