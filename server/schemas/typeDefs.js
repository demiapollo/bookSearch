const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }
  type Auth {
    token: String!
    user: User!
  }
  type Query {
    me: User
  }
  input BookInput {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): User
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
