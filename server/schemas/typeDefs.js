const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}


  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks:[books]

    }
    type books{
     _id :ID!
     authors:String
     description: String!
     bookId:String!
     image:String!
     link:String!
     title:String!
}

input booksInput{
  _id :ID!
  authors:String
  description: String!
  bookId:String!
  image:String!
  link:String!
  title:String!
}
  type Query {
    me: User
   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData :booksInput!) :User
    deleteBook(bookID :ID! ):books
  }
`;

module.exports = typeDefs;
