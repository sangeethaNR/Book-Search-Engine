const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}


  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks:[Book]

    }
    type Book{
     _id :ID
     authors:[String]
     description: String!
     bookId:String!
     image:String
   link: String
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
    me(username: String!): User
   
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, title: String!, bookId: String!, image: String): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
