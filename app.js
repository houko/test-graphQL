const {ApolloServer, gql} = require("apollo-server");


const typeDefs = gql`
    type Query {
        hello: String!,
        ping: String!,
        price: Int,
        PI: Float,
        isVIP: Boolean
    }
`;


const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL!"
        },
        // ping: () => {
        //     return "pong";
        // },
        price:()=> 1 ,
        PI: ()=> 3.14,
        isVIP: ()=> false
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(3000).then(({url}) => {
    console.log(`server running at ${url}`);
})


