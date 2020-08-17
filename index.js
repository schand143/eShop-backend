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

// var server = express();
// server.listen(process.env.PORT || 4000);

// server.start(() => console.log('Server listening at 4000'));

// server.listen(3001, () => {});
// console.log('Node server running on port 3000');

// var port = process.env.port || 4000;

// server.listen(port);

const port = process.env.PORT;
server.start(port, () =>
  console.log(`Server is running on http://localhost:4000 }`)
);
