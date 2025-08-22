import "dotenv/config";

export const ENV_APP_PORT: number = Number(process.env.PORT);
console.log(ENV_APP_PORT)

export const ENV_DB = 
{
    HOST: process.env.DB_HOST || "localhost",
    PORT: Number(process.env.DB_PORT) || 3302,
    USER: process.env.DB_USER || "user",
    PASSWORD: process.env.DB_PASSWORD || "root",
    DATABASE: process.env.DB_NAME || "monbudget",
}