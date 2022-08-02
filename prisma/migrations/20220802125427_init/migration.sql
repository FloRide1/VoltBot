-- CreateTable
CREATE TABLE "VOLTBOT_User" (
    "id" SERIAL NOT NULL,
    "discord_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "VOLTBOT_User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VOLTBOT_User_discord_id_key" ON "VOLTBOT_User"("discord_id");
