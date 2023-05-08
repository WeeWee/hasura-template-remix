import { createCookieSessionStorage } from "@remix-run/node";
import { env } from "./env.server";

export type User = {
  id: string | null;
  email: string;
  name: string;
  token: string;
};

type Cookie = NonNullable<
  Required<Parameters<typeof createCookieSessionStorage>[0]>
>["cookie"];

const cookie = (name: string): Cookie => ({
  name,
  sameSite: "lax",
  path: "/",
  httpOnly: true,
  secrets: [env.COOKIE_SECRET],
  secure: process.env.NODE_ENV === "production",
});

export const sessionStore = createCookieSessionStorage({
  cookie: cookie("_session"),
});

export const { getSession, commitSession, destroySession } = sessionStore;
