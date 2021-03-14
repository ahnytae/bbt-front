import { gql } from '@apollo/client';

export const SIGNIN = gql`
  query($id: String!) {
    user(id: $id) {
      id
    }
  }
`;

export const SIGNUP = gql`
  mutation createUser($id: String!, $pw: String!, $name: String!) {
    createUser(variables: { id: $id, pw: $pw, name: $name }) {
      userNo
      id
      pw
      name
    }
  }
`;
