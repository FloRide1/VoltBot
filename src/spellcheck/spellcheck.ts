import Reverso from 'reverso-api';
const reverso = new Reverso()

async function check_text(text: string)
{
    return await reverso.getSpellCheck(text, 'french', (err: any, res: any) => {
        if (err)
        {
            console.log("[ERROR][SPELL] Reverso did not respond correctly");
            throw new Error(err.message);
        }
        console.log(`[SPELL] Reverso has found: ${res.corrections.length} errors`);
        return res;
    })
}

export default check_text;
