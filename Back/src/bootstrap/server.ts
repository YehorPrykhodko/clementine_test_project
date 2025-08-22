import { ENV_APP_PORT } from "../infrastucture/config/env.js";
import app from "./app.js";

app.listen(ENV_APP_PORT, ()=>{
    console.log(`Serveur lancé sur http://localhost:${ENV_APP_PORT}`);
})