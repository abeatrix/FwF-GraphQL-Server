const { ApolloServer } = require('apollo-server-cloudflare')
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')

const KVCache = require('../kv-cache')
const postsAPI = require('../datasources/postsAPI')
const resolvers = require('../resolvers')
const typeDefs = require('../schema')

const dataSources = () => ({
    postsAPI: new postsAPI(),
})

const kvCache = { cache: new KVCache() }

const createServer = graphQLOptions =>
    new ApolloServer({
        typeDefs,
        resolvers,
        // GQL GUI
        introspection: true,
        dataSources,
        ...(graphQLOptions.kvCache ? kvCache : {}),
    })

const handler = ( request, graphQLOptions ) => {
    const server = createServer(graphQLOptions)
    return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

module.exports = handler
