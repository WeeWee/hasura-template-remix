import type { QueryFetcher } from "gqty";
import { createClient } from "gqty";
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

if (!process.env.HASURA_URL || !process.env.HASURA_SECRET) {
  throw new Error("No HASURA ENV variables found!");
}

export const useGqty = (headers?: Record<string, string>) => {
  console.log("Headers in gqty", headers);
  const queryFetcher: QueryFetcher = async function (query, variables) {
    return fetch(process.env.HASURA_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      mode: "cors",
    })
      .then((r) => r.json())
      .catch(console.log);
  };

  const client = createClient<
    GeneratedSchema,
    SchemaObjectTypesNames,
    SchemaObjectTypes
  >({
    schema: generatedSchema,
    scalarsEnumsHash,
    queryFetcher,
  });

  return client;
};

export * from "./schema.generated";
