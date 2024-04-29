import { gql } from "@apollo/client";

export const getAuthenticatedUser = gql`
  query GetAuthUser {
    authUser {
      _id
      name
      username
      profileImage
    }
  }
`;
