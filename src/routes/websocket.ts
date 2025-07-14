import { Hono } from "hono";
import { ama } from "../assets/amatullah";
import { upgradeWebSocket } from "../assets/sockethandler";
const sock = new Hono()


sock.get("/ai", upgradeWebSocket((c) => {
    const id = c.req.query("id")
   if(!id) {
    return {
      onOpen(event, ws) {
        ws.send(" ID not found. Connection closed.");
        ws.close();
      }
    };
   }
    return {
      
        async onMessage(event, ws) {
            console.log("meessage received")
            const reply = await ama(event.data, id)
            if(!reply) {
                ws.send('an error occured')
            }
            ws.send(reply)
        },
        onClose: () => {
            console.log("connection closed")
        }
    }
}))


export default sock;