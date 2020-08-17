const { GraphQLServer } = require('graphql-yoga');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Product = require('./resolvers/Product');
const Brand = require('./resolvers/Brand');
var express = require('express');

const resolvers = {
  Query,
  Mutation,
  Product,
  Brand,
};

const server = new GraphQLServer({
  typeDefs: './types/schema.graphql',
  resolvers,
});

// var server = express();
// server.listen(process.env.PORT || 4000);

// server.start(() => console.log('Server listening at 4000'));

// server.listen(3001, () => {});
// console.log('Node server running on port 3000');

// var port = process.env.port || 4000;

// server.listen(port);

server.start(process.env.PORT || 4000, () =>
  console.log('Server running on port 4000')
);
