import { gql } from "@apollo/client";

export const GET_ISSUE_INFO = gql`
  query GET_ISSUE_INFO($number: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        url
        state
        title
        author {
          url
          login
        }
        createdAt
        lastEditedAt
        bodyHTML
        closed
        closedAt
      }
    }
  }
`;