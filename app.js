const {ApolloServer, gql} = require("apollo-server");

const dataList = [
    {
        id: 1,
        title: "linux",
        url: "https://linux.org",
        pageViews: 333
    },
    {
        id: 2,
        title: "java",
        url: "https://linux.org",
        pageViews: 1
    },
    {
        id: 3,
        title: "golang",
        url: "https://linux.org",
        pageViews: 5523
    },
    {
        id: 4,
        title: "graphQL",
        url: "https://linux.org",
        pageViews: 123
    },
    {
        id: 5,
        title: "dash",
        url: "https://linux.org",
        pageViews: 11111
    }
]


const typeDefs = gql`
    type Site{
        id: Int!,
        title: String!,
        url: String,
        pageViews: Int,
    },
    type Query {
        hello: String!,
        book: [String],
        sites:[Site],
        site(id: Int!): Site
    }
`;


const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL!"
        },
        book: () => ['n1', 'n2', 'n3'],
        sites: () => dataList,
        site: (parent, args, context) => {
            return dataList.find(item => {
                return item.id === args.id
            })
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


