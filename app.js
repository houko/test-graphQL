const {ApolloServer, gql} = require("apollo-server");
const resolvers = require('./resolvers')
const context = require('./context')
const typeDefs = require('./schemas')


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
})


server.listen(3000).then(({url}) => {
    console.log(`server running at ${url}`);
})


