const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
  }

  type Hero {
    name: String!
    power: String!
  }

  type Query {
    user: User!
    hero: Hero!
  }
`

const resolvers = {
  Query: {
    user: () => { return { name: 'Thiago Saraiva', age: 19 } },
    hero: () => { return { name: 'Batman', power: 'Just a normal rich man' } }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server running at ${url}`)
})