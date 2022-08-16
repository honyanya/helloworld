var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    message: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  message: () => {
    return 'Hello world! GraphQL';
  },
};

// Run the GraphQL query '{ message }' and print out the response
graphql({
  schema,
  source: '{ message }',
  rootValue
}).then((response) => {
  console.log(response);
});
