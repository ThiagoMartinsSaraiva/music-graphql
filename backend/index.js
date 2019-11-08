const { ApolloServer, gql } = require('apollo-server')

const musics = [
  { name: 'Run', duration: 3.43, rate: 10 },
  { name: 'Oh no', duration: 4.57, rate: 10 }
]

const typeDefs = gql`
  type Music {
    name: String!
    duration: Float!
    rate: Int!
  }
  
  type Query {
    musics: [Music]
    musicByName(name: String): Music
  }
`

const resolvers = {
  Query: {
    musics: () => musics,
    musicByName(_, args) {
      return musics.find(music => music.name == args.name)
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