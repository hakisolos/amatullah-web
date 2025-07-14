import { verifyToken } from "../middleware/auth"
import type { ChatContext } from "../types";
import { Hono } from "hono"


const chat = new Hono<ChatContext>();
chat.use("*", verifyToken)

chat.get("/getuser", (c) => {
  const user = c.get("user");
  if(!user) return c.json("no user found", 404)
  return c.json(user);
});





export default chat;