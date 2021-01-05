// require("dotenv").config({
//   path: `.env`,
// })

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: process.env.GATSBY_WPGRAPHQL_URL,
  cache: new InMemoryCache(),
})
