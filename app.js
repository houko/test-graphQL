const {ApolloServer, gql} = require("apollo-server");


const typeDefs = gql`
    type Query {
        hello: String,
        ping: String
    }
`;


const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL!"
        },
        ping: () => {
            return "pong";
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(3000).then(({url}) => {
    console.log(`server running at ${url}`);
})


