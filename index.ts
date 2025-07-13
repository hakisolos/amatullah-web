import {Hono} from "hono"
const app = new Hono() 
import auth from "./src/routes/auth"
import dash from "./src/routes/dashboard"
app.get("/", (c) => {
    return c.text("hello world")
})
app.route("/auth", auth)
app.route("/app", dash)

Bun.serve({
    fetch: app.fetch,
    port: Number(process.env.PORT)
})
console.log(`app running on http://localhost:${Number(process.env.PORT)}`)

