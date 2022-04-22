const {ApolloServer, gql} = require("apollo-server");

const dataList = [
    {
        title: "linux",
        url: "https://linux.org",
        pageViews: 333
    },
    {
        title: "java",
        url: "https://linux.org",
        pageViews: 1
    },
    {
        title: "golang",
        url: "https://linux.org",
        pageViews: 5523
    },
    {
        title: "graphQL",
        url: "https://linux.org",
        pageViews: 123
    },
    {
        title: "dash",
        url: "https://linux.org",
        pageViews: 11111
    }
]


const typeDefs = gql`
    type Site{
        title: String!,
        url: String,
        pageViews: Int,
    },
    type Query {
        hello: String!,
        book: [String],
        sites:[Site]
    }
`;


const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL!"
        },
        book: ()=>['n1','n2','n3'],
        sites: ()=> dataList
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(3000).then(({url}) => {
    console.log(`server running at ${url}`);
})


