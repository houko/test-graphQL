schema

```
    type Mutation{
        addSite(input: SiteInput!): Site,
        updateSite(id: Int!, input: SiteInput!): Site,
        deleteSite(id: Int!): Site, 
    }

    input SiteInput{
        title: String,
        url: String,
        logo: String,
        category: String
    }
    
```

resolvers

```
    // resolvers/Mutation.js
    exports.Mutation = {
    addSite: (parent, {input}, context) => {
        const {sites} = context;

        const newSite = {
            id: sites.length + 1,
            title: input.title,
            url: input.url,
            logo: input.logo,
            category: input.category,
            pageViews: 0,
        }
        sites.push(newSite);
        return newSite;
    },
        updateSite: (parent, {id, input}, context) => {
        const {sites} = context;
        const site = sites.find(site => site.id === id);
        if (!site) {
            throw new Error(`Site with id ${id} not found`);
        }
        site.title = input.title;
        site.url = input.url;
        site.logo = input.logo;
        site.category = input.category;
        return site;
    },
    deleteSite: (parent, {id}, context) => {
        const {sites} = context;
        const site = sites.find(site => site.id === id);
        if (!site) {
            throw new Error(`Site with id ${id} not found`);
        }
        sites.splice(sites.indexOf(site), 1);
        return site;
    },
}
    
    
// resolvers/index.js
const resolvers = {
    Query: require('./Query').Query,
    Mutation: require('./Mutation').Mutation,
}

module.exports = resolvers
    
    
```

query

```
    

```

query result

```


```