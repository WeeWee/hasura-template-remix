# Using the template

## Create a Hasura project
1. Get the secret admin key and change the gqty.config.cjs file and replace HASURA_SECRET in .env file.
2. Take the hasura url and add it to the gqty.config.cjs file and replace HASURA_URL in .env file.
3. Go to https://randomkeygen.com/ and take a strong password from there and replace COOKIE_SECRET in .env
4. Go to https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx and create a 256 bit encryption key and replace JWT_SECRET in .env .
5. Go to hasura env vars, Hasura -> Projects -> Settings Icon -> Env vars and create a key called HASURA_GRAPHQL_JWT_SECRET, and in the value create an object with your key and the jwt type.
```
{
    "key": "your key",
    "type": "HS256"
}
```
6. Go to Hasura -> Your project -> Data and schema managment -> Create a new Database -> Go to Neon Database -> Log in with Hasura -> Create the database. (You can only create one database on free tier)
7. Dont forget to yarn to initialize the node modules
8. Also dont forget to run yarn codegen to generate the schemas from Hasura!
9. Your ready to go, create your schema and when you are done use yarn generate or npm generate in your console in github!
