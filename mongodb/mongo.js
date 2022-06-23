import { params } from "@serverless/cloud";
import { MongoClient } from "mongodb";

const uri = params.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

await client.connect();

const db = client.db("demo");

export const users = db.collection("users");
