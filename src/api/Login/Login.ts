import { gql } from '@apollo/client';

export const SIGNIN = gql`
  query($id: String!, $pw: String!) {
    login(data: { id: $id, pw: $pw })
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
