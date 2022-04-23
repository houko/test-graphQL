const {ApolloServer, gql} = require("apollo-server");

const sites = require('./data/sites').sites;
const categories = require('./data/categories').categories;

const typeDefs = gql`
    type Site{
        id: Int!,
        title: String!,
        url: String,
        pageViews: Int,
        category: String
    },
    type Category{
        id: String!,
        desc: String,
        showOrder: Int,
        display: String
    },
    type Query {
        hello: String!,
        book: [String],
        categories: [Category],
        sites:[Site],
        site(id: Int!): Site
        category(id: String!): [Site]
    }
`;


const resolvers = {
    Query: {
        hello: () => {
            return "GraphQL!"
        },
        book: () => ['n1', 'n2', 'n3'],
        sites: () => sites,
        categories: () => {
            return categories
        },
        category: (parent, args, context) => {
            const {id} = args;
            return sites.filter(item => item.id === id)
        },
        site: (parent, args, context) => {
            return sites.find(item => {
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


