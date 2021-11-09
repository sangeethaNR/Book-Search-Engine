import { gql } from '@apollo/client';

// refrenced from 22-state Activity 18
export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// refrenced from 22-state Activity 18

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_BOOK = gql`
mutation saveBook(
  $authors: [String]
  $description: String!
  $title: String!
  $bookId: String!
  $image: String
) {
  saveBook(
    authors: $authors
    description: $description
    title: $title
    bookId: $bookId
    image: $image
  ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
    }
  }
}
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        image
      }
    }
  }
`;