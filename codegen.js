require('dotenv').config();

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_URL}/v1/graphql`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    './lib/generated/graphql.ts': {
      documents: ['./lib/**/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      config: {
        skipTypename: false,
        withHooks: true,
      },
    },
  },
};
