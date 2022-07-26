import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import config from "./config/config.js"
import run_discord_bot from "./discord/discord.js"

const prisma = new PrismaClient()

async function main(): Promise<void>
{
    console.log("VoltBolt - Hello World");

    // Credentials
    if (!check_crendentials())
    {
        console.log("[ERROR] Credentials are not correctly setup");
        return;
    }
    run_discord_bot();
}

function check_crendentials(): boolean
{
    if (config.discord.token == null || config.discord.token == undefined)
        return false;
    return true;
}

main();
