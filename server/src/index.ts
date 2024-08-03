
import { server_init } from "./app/server";
import 'dotenv/config'

const PORT = process.env.PORT ||5000;
import { prisma } from "./clients";


async function main(){
    const app = await server_init()
    app.listen(PORT,()=>console.log(`server started on http://localhost:${PORT}`));

    
    
    
}

main();