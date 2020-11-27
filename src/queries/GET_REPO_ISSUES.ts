import { gql } from "@apollo/client";

export const GET_REPO_ISSUES = gql`
  query GET_REPO_ISSUES($query: String!) {
    search(query: $query, type: ISSUE, first: 6) {
      nodes {
        ... on Issue {
          number
          title
        }
      }
    }
  }
`;