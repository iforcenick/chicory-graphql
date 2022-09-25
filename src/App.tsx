import DropBox from "./components/DropBox";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://prod-cart.chicoryapp.com/api/graph/",
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <DropBox/>
    </ApolloProvider>
  );
}

export default App;