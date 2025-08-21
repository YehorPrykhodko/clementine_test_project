import "dotenv/config";

export const ENV_APP_PORT: number = Number(process.env.PORT);

export const ENV_DB = 
{
    HOST: process.env.DB_HOST,
    PORT: Number(process.env.DB_PORT),
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_NAME,
}