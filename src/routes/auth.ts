import { supabase } from "../supabase";
import { Hono } from "hono";
const auth = new Hono()


auth.post("/newuser", async(c) => {
    const body = await c.req.json()
    if(!body.email || !body.password) return c.json('username or password missing', 401)
    const {data, error} = await supabase.auth.signUp({
        email: body.email,
        password: body.password
    })
    if(error) {
        return c.json(`an error occured: ${error}`, 500)
    } 
    return c.json(`signup successfull: ${data}`, 200)
})

auth.post("/login", async(c) => {
    const body = await c.req.json()
    if(!body.password || !body.email) {
        return c.json("password needed", 401)
    }
    const {data, error} = await supabase.auth.signInWithPassword({
        email: body.email,
        password: body.password
    })
    if(error) {
        return c.json(`internal server error: ${error}`)

    }
    return c.json({
        message: `logn successful`,
        data: data
    })
})
auth.get("/confirmed", (c) => {
    return c.text("AUTHENTICATED SUCCESSFULLY")
})
export default auth;