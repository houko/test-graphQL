声明   
```
const typeDefs = gql`
    type Site{
        title: String!,
        url: String,
        pageViews: Int,
    },
    type Query {
        sites:[Site],
        site(id: Int!): Site
    }
`;
```


函数  
```
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
```

查询   
```
query ExampleQuery($id: Int!) {
  hello
  book
  site(id: $id) {
    title
    url
    pageViews
  }
}

参数  
{
  "id": 3
}

```