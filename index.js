const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const url = "mongodb+srv://dalla:u8Admp9npKDbMZtk@cluster0.md4wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});
const server = new ApolloServer({
      typeDefs: typeDefs.typeDefs,
      resolvers: resolvers.resolvers
});
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
