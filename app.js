const {ApolloServer, gql} = require("apollo-server");


const context = {
    add: (x, y) => x + y,
    minus: (x, y) => x - y
}


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
        price: (parent, args, context) => {
            const {add} = context
            let data = add(1, 2);
            console.log(data)
            return data;
        },
        PI: () => 3.14,
        isVIP: () => false
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
})


server.listen(3000).then(({url}) => {
    console.log(`server running at ${url}`);
})


