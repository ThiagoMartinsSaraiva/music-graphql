const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
  }

  type Query {
    ola: String
    user: User
  }
`

const resolvers = {
  Query: {
    ola: () => 'Bom dia',
    user() {
      return {
        name: 'Thiago Saraiva',
        age: 19
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server running at ${url}`)
})