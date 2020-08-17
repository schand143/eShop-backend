const { GraphQLServer } = require('graphql-yoga');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Product = require('./resolvers/Product');
const Brand = require('./resolvers/Brand');

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

server.start(() => console.log('Server listening at 4000'));

// server.listen(3001, () => {});
// console.log('Node server running on port 3000');
