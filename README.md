schema
```
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
```


resolvers
```
     sites: (parent, {filter}, {sites}) => {
            let resultSites = sites;
            if (filter) {
                resultSites = resultSites.filter(item => item.pageViews > filter.pageViews)
            }
            return resultSites
        },
```


query
```
        sites: (parent, {filter}, {sites}) => {
            let resultSites = sites;
            if (filter) {
                resultSites = resultSites.filter(item => item.pageViews > filter.pageViews)
            }
            return resultSites
        },
```


query result
```
query Sites($filter: MySiteFilter) {
  sites(filter: $filter) {
    id
    title
    url
    pageViews
    category
  }
}

{
  "filter": {
    "pageViews": 1000
  }
}

```