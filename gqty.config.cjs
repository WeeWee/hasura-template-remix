/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: false,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "https://remix-auth-google.hasura.app/v1/graphql",
    //CHANGE ENDPOINT
    headers: {
      "x-hasura-admin-secret":
        "E1q4RB6UeFnzyX4aW0jBxmnvIu7Fsfn7lNJUmVgtkQQtmnoA0wWlHImWJpIB71B3",
      //CHANGE TO YOUR HASURA ADMIN SECRET
    },
  },
  destination: "./app/_gqty/index.ts",
  subscriptions: false,
};

module.exports = config;
