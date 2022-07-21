const env: string = process.env.NODE_ENV || 'dev';

interface Environment
{
    discord: object;
}

// TODO: Split in differents files
const dev: Environment = Object.freeze({
    discord:
        {
            token: process.env.DISCORD_TOKEN || "0",
        }
});

const config: any = {
    dev,
};

export default config[env];
