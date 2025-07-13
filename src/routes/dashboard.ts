import { Hono } from "hono";
import { supabase } from "../supabase";


const dash = new Hono()

dash.get("/", async(c) => {
   
    return c.json(
        {
            message: `confirmed`
        }
    )
})


export default dash