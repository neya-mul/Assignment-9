import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])

import { betterAuth, cidrv4 } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
await client.connect()
const db = client.db("pet-nest");


console.log('MONGO_URI:', process.env.MONGO_URI);
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});