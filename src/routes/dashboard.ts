import { Hono } from "hono";
import { supabase } from "../supabase";
import { serveStatic } from "hono/serve-static";


const dash = new Hono()

dash.get("/", async(c) => {
   
    return c.json(
        {
            message: `confirmed`
        }
    )
})

export default dash