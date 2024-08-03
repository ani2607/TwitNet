import 'dotenv/config'
import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

export async function server_init(){

    const app = express();

    app.use(express.json());


    const grapqlServer = new ApolloServer({
        typeDefs :`
        type Query {
            sayHello : String
        }
        
        `,
        resolvers :{
            Query : {
                sayHello : ()=> 'hello'
            },
            
        },
    });

    await grapqlServer.start();

    app.use('/graphql',expressMiddleware(grapqlServer));
    
    return app;


}