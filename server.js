const express = require("express");
const graphqlHTTP = require("express-graphql");
const MyGraphQLSchema = require("./schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started on port ${port}`));
