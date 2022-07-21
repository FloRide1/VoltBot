const env: string = process.env.NODE_ENV || 'dev';

interface Environment
{
    discord: object;
}

// TODO: Split in differents files
const dev: Environment = Object.freeze({
    discord:
        {
            botname: process.env.DISCORD_BOTNAME || "voltbot",
            token: process.env.DISCORD_TOKEN,
            channels: process.env.DISCORD_CHANNEL || ["999644669929607292"],
            cache: process.env.DISCORD_CACHE || 100,
        }
});

const config: any = {
    dev,
};

export default config[env];
