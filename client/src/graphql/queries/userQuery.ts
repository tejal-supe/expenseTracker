import { gql } from '@apollo/client';

const getAuthenticatedUser = gql`
  query Det {
    dogs {
      id
      breed
    }
  }
`;  