import { api } from "@serverless/cloud";
import { users } from "./mongo";

api.get("/users", async (req, res) => {
  await users.insertOne({ name: "Sam Smith" });

  const result = await users.find().toArray();

  res.send({
    result,
  });
});

api.get("/*", (req, res) => {
  res.redirect("/users");
});
