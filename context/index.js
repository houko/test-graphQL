const sites = require('../data/sites').sites;
const categories = require('../data/categories').categories;


const getAuthInfo = (token) => {
    console.log(token)
    if (token === '123456') {
        return {
            userId: '1',
            username: 'admin',
            role: 'admin'
        }
    } else {
        return null
    }
}

const context = ({req}) => ({
    add: (x, y) => x + y,
    minus: (x, y) => x - y,
    sites,
    categories,
    authInfo: getAuthInfo(req.headers.authorization),
})


module.exports = context