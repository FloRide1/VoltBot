import config from "./config/config.js"
import run_discord_bot from "./discord/discord.js"

function main(): void
{
    console.log("VoltBolt - Hello World");

    // Credentials
    if (!check_crendentials())
        console.log("[ERROR] Credentials are not correctly setup");
    run_discord_bot();
}

function check_crendentials(): boolean
{
    if (config.discord.token === "0")
        return false;
    return true;
}

main();
