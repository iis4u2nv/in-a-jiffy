import { gql } from '@apollo/client';

export const QUERY_GETME = gql`
  query getme {
    getme {
      me
    }
  }
`;
