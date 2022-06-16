import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { API_URL } from '../config'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: `http://localhost:8080/graphql`,
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

