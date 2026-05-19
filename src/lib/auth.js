import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ✅ define client FIRST, then connect
const client = new MongoClient(process.env.MONGO_URI);
client.connect(); // no await needed at top level

const db = client.db("pet-nest");

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: "http://localhost:3000",
    trustedOrigins: ["http://localhost:3000"],
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, { client }),
});