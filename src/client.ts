import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const resolvers = {
  // Mutation: {
  //   toggleName: (_: any, { name }: any, { cache }: any) => {
  //     const newLoginState = { title: name, __typename: "name" };
  //     const data = { books: [newLoginState] };
  //     cache.writeData({ data });
  //     return newLoginState;
  //   }
  // }

  Mutation: {
    toggleState: (_: any, { status }: any, { cache }: any) => {
      const newStatus = { state: status, __typename: "login" };
      const data = { isLogin: newStatus };
      cache.writeData({ data });
      return newStatus;
    }
  }
};

const cache = new InMemoryCache();

const link = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  cache,
  resolvers,
  link
});

cache.writeData({
  data: {
    books: [
      {
        title: "walli",
        __typename: "name"
      }
    ],
    isLogin: {
      state: false,
      __typename: "login"
    }
  }
});

export default client;
