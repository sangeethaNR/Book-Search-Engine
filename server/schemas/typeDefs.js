const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}

  type Me {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks:[bookSchema]

    }
    type bookSchema{
     _id :ID!
     authors:String
     description: String!
     bookId:String!
     image:String!
     link:String!
     title:String!
}

  
  type Query {
    me: [Me]
   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(books :bookSchema!)
    deleteBook(bookID :ID! ):bookSchema
  }
`;

module.exports = typeDefs;
