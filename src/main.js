import App from './App.vue'
import './index.css'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { createApp, h } from 'vue'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'https://graphql.anilist.co',
})
const app = createApp({
    render: () => h(App),
})
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

app.use(apolloProvider)



app.mount('#app')