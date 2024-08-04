import 'dotenv/config'
import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { User } from './user';
export async function server_init(){

    const app = express();

    app.use(express.json());


    const grapqlServer = new ApolloServer({
        typeDefs :`
        ${User.types}
        type Query {
            ${User.queries}
        }
        
        `,
        resolvers :{
            Query : {
               ...User.resolvers.queries
            },
            
        },
    });

    await grapqlServer.start();

    app.use('/graphql',expressMiddleware(grapqlServer));
    
    return app;


}