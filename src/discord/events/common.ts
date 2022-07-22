import type {ArgsOf} from "discordx";
import {Discord,
        On} from "discordx";
import check_text from "../../spellcheck/spellcheck.js";

@Discord()
export abstract class AppDiscord
{
    @On("messageCreate")
    onMessageCreate([message]: ArgsOf<"messageCreate">)
    {
        console.log(`[BOT] New Message from "${message.author.username}"(${message.author.id}): "${message.content}" [${message.id}]`);
        check_text(message.content).then((res) => {
            if (res.corrections.length != 0)
            {
                console.log(`[BOT] The Message "${message.content}"(${message.id}) is misspelled: ${res.corrections[0].explanation}`);
            }
        });
    }

    @On("messageUpdate")
    onMessageUpdate([old_message, new_message]: ArgsOf<"messageUpdate">)
    {
        console.log(`[BOT] Message Update from \"${new_message.author?.username}\"(${new_message.author?.id}): \"${old_message.content}\" to \"${new_message.content}\" [${new_message.id}]`);
        if (new_message.content === null)
            return;
        check_text(new_message.content).then((res) => {
            if (res.corrections.length != 0)
            {
                console.log(`[BOT] The Updated Message "${new_message.content}"(${new_message.id}) is misspelled: ${res.corrections[0].explanation}`);
            }
        });
    }
}
