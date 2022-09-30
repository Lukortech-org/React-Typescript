import { createServer, Model } from "miragejs"

export default function makeServer() {
    createServer({

        models: {
            user:Model,
        },

        logging: true,

        seeds(server) {
            server.create("user", { text: "John Doe" })
            server.create("user", { text: "John Smith" })
            server.create("user", { text: "John Buck" })
        },

        routes() {
            //this.namespace = "/mock"

            //@ts-ignore
            this.get("/api/users", (schema) => schema.users.all())
        },
    })
}