
import { env } from "@/env.mjs";
import type { AuthOptions } from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import LineProvider from "next-auth/providers/line";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    // GitHubProvider({
    //   clientId: env.GITHUB_ID,
    //   clientSecret: env.GITHUB_SECRET
    // }),
    // FacebookProvider({
    //   clientId: env.FACEBOOK_CLIENT_ID,
    //   clientSecret: env.FACEBOOK_CLIENT_SECRET
    // }),
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET
    // }),
    LineProvider({
      clientId: env.LINE_CLIENT_ID,
      clientSecret: env.LINE_CLIENT_SECRET
    })
  ]
}