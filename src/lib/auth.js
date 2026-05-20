import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
client.connect(); // no await needed at top level

const db = client.db("pet-nest");

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            prompt: "select_account",
        },
    },
    baseURL: "http://localhost:3000",
    trustedOrigins: ["http://localhost:3000"],
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, { client }),
});