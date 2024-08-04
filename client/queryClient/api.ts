import {GraphQLClient} from 'graphql-request'

const isClient = typeof window !== 'undefined'

export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql',
    {
        headers : ()=> ({
            Authorization : `Bearer ${isClient ? window.localStorage.getItem('__twitnetToken__') : ''}`
        })
    }
)