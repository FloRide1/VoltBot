import Reverso from 'reverso-api';
const reverso = new Reverso()

function remove_useless(text: string)
{
    return text.replace(/<[^>]*>/g, "");
}

async function check_text(text: string)
{
    let corrected_text = remove_useless(text)
    return await reverso.getSpellCheck(corrected_text, 'french', (err: any, res: any) => {
        if (err)
        {
            console.log("[ERROR][SPELL] Reverso did not respond correctly");
            throw new Error(err.message);
        }
        console.log(`[SPELL] Reverso has found: ${res.corrections.length} errors during analysis of phrase: "${corrected_text}"`);
        return res;
    })
}

export default check_text;
