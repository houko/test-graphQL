const {sites} = require("../data/sites");
const {categories} = require("../data/categories");
const query = {
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

module.exports = query