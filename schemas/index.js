const {gql} = require("apollo-server");
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
        sites(filter: MySiteFilter):[Site],
        site(id: Int!): Site
        category(id: String!): [Site]
    }
    input MySiteFilter{
        pageViews: Int!
    }
`;

module.exports = typeDefs