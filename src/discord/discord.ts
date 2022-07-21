import {dirname,
        importx} from "@discordx/importer";
import {IntentsBitField} from "discord.js";
import {Client} from "discordx";

import config from "../config/config.js"

async function run_discord_bot(): Promise<void>
{
    const client = new Client({
        botId: config.discord.botname,
        prefix: config.discord.prefix,
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.GuildMessageReactions,
            IntentsBitField.Flags.GuildEmojisAndStickers,
            IntentsBitField.Flags.GuildMessageTyping,
            IntentsBitField.Flags.MessageContent,
        ],
    });

    client.once('ready', () => {
        console.log('[BOT] Ready!');

        // Cache message
        console.log(`[BOT] Cache message limit: ${config.discord.cache}`)
        for (let c of config.discord.channels)
        {
            const channel = client.channels.cache.get(c);
            console.log(`[BOT] Fetch cache message from ${channel?.name}(${channel?.id})`);
            channel?.messages.fetch({ limit: config.discord.cache })
        }
    });

    await importx(dirname(import.meta.url) + "/{events,commands,api}/**/*.{ts,js}");

    await client.login(config.discord.token);
}

export default run_discord_bot;
