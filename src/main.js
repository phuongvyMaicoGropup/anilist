import App from "./App.vue";
import "./index.css";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { createApp, h } from "vue";
import { router } from "./routing";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://graphql.anilist.co",
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp({
  render: () => h(App),
});
app.use(apolloProvider);
app.use(router);

// directive

app.mount("#app");
