import type {ArgsOf} from "discordx";
import {Discord,
        On} from "discordx";

@Discord()
export abstract class AppDiscord
{
    @On("messageCreate")
    onMessageCreate([message]: ArgsOf<"messageCreate">)
    {
        console.log(`[BOT] New Message from \"${message.author.username}\"(${message.author.id}): \"${message.content}\ [${message.id}]"`);
    }

    @On("messageUpdate")
    onMessageUpdate([old_message, new_message]: ArgsOf<"messageUpdate">)
    {
        console.log(`[BOT] Message Update from \"${new_message.author?.username}\"(${new_message.author?.id}): \"${old_message.content}\" to \"${new_message.content}\" [${new_message.id}]`);
    }
}
