import config from "./config/config"

function main(): void
{
    console.log("VoltBolt - Hello World");

    // Credentials
    if (!check_crendentials())
        console.log("[ERROR] Credentials are not correctly setup");
}

function check_crendentials(): boolean
{
    if (config.discord.token === "0")
        return false;
    return true;
}

main();
