import jwt from "jsonwebtoken";

export const createToken = async ({ id }: { id: string; role?: string }) => {
  let jwtSecretKey = process.env.JWT_SECRET as string;
  console.log("jwt secret key: ", jwtSecretKey);

  let data = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-default-role": "user",
      "x-hasura-user-id": id,
    },
  };

  return jwt.sign(data, jwtSecretKey);
};
