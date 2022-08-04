import {Message} from "discord.js";

import config from "../../config/config.js"

import stopCommand from "./stop.js"

export abstract class Commands
{
    static is_command(message: Message): boolean
    {
        return message.content.startsWith(config.discord.prefix);
    }

    static apply_command(message: Message): void
    {
        if (!Commands.is_command(message))
            return;
        console.log(`[BOT] New Command from "${message.author.username}"(${message.author.id}): "${message.content}" [${message.id}]`);
        stopCommand(message);
    }
}
