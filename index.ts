import {Hono} from "hono"
const app = new Hono() 
import auth from "./src/routes/auth"
import dash from "./src/routes/dashboard"
import { websocket } from "./src/assets/sockethandler"
import sock from "./src/routes/websocket"
import { serveStatic } from "hono/bun";
app.get("/", (c) => {
    return c.text("hello world")
})
app.route("/auth", auth)
app.route("/app", dash)
app.route("/ws", sock)

app.get("/auth", serveStatic({path: "./frontend/auth.html"}))
app.get("/chat", serveStatic({path: "./frontend/index.html"}))
Bun.serve({
    fetch: app.fetch,
    websocket,
    port: Number(process.env.PORT)
})
console.log(`app running on http://localhost:${Number(process.env.PORT)}`)
