// Object passed to client to let know what value to resolve in query on client side
import { gql } from "apollo-boost";
import { GET_CURRENT_USER } from "./queries";

// We define schema for the client side
// to make local chanes in cache or make request and store in cache which acts a management service
export const typeDefs = gql`
  extend type User {
    token: String
  }
`;
// quantity to check how many we have put in to our cart
// extend implies to extend mutation or item type already existing in graphql

// resolver for the typedefs we created on the client side
export const resolvers = {
  Mutation: {
    addCurrentUser: (_parent, _args, _ctx, _info) => {
      const { user } = _args;
      const { currentUser } = _ctx.cache.readQuery({
        query: GET_CURRENT_USER,
        variables: {},
      });

      _ctx.cache.writeQuery({
        query: GET_CURRENT_USER,
        data: {
          currentUser: user,
        },
      });
      return currentUser;
    },
  },
};
