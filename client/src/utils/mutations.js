import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation createLoginUser($username: String!, $email: String!, $password: Int!) {
    createLoginUser(loginUser: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: String!, $techNum: Int!) {
    addUser(_id: $_id, techNum: $techNum) {
      _id
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($_id: String!, $techNum: Int!) {
    saveBook(_id: $_id, techNum: $techNum) {
        _id
        username
        email
        password
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($_id: String!, $techNum: Int!) {
    removeBook(_id: $_id, techNum: $techNum) {
        _id
        username
        email
        password
    }
  }
`;
