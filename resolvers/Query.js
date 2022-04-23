const {sites} = require("../data/sites");
const {categories} = require("../data/categories");
exports.Query = {
    hello: () => {
        return "GraphQL!"
    },
    book: () => ['n1', 'n2', 'n3'],
    sites: (parent, {filter}, {sites}) => {
        let resultSites = sites;
        if (filter) {
            resultSites = resultSites.filter(item => item.pageViews > filter.pageViews)
        }
        return resultSites
    },
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
