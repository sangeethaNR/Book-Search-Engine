const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Me {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks:[bookSchema]

    }

  
  type Query {
    me: [Me]
   
  }


`;

module.exports = typeDefs;
