const { ApolloServer, gql } = require('apollo-server')

const musics = [
  { name: 'Run', duration: 3.43 },
  { name: 'Oh no', duration: 4.57 }
]

const typeDefs = gql`
  type Music {
    name: String!
    duration: Float!
  }
  
  type Query {
    music: [Music]
  }
`

const resolvers = {
  Query: {
    music: () => musics
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server running at ${url}`)
})