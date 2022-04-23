const sites = require('../data/sites').sites;
const categories = require('../data/categories').categories;


const context = {
    add: (x, y) => x + y,
    minus: (x, y) => x - y,
    sites,
    categories
}


module.exports = context