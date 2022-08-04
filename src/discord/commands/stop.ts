import {Message} from "discord.js";

import config from "../../config/config.js"

export default function stopCommand(message: Message): void
{
    let content: string = message.content.slice(config.discord.prefix.length);
    if (!content.startsWith("Monsieur veuillez cesser de m'importuner avec vos corrections de graphie"))
        return;

    console.log(`[BOT] Stop commands detected from "${message.author.username}"(${message.author.id}): "${message.content}" [${message.id}]`);
    message.channel.send(`Veuillez m'excuser ${message.author.username}, je tacherais de ne plus vous tourmenter avec mon orthographe`);
}
