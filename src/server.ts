import { createServer, Model } from "miragejs"

export default function makeServer() {
    const createUser =(name:string)=>{
        return{
            name
        }
    }
    createServer({

        models: {
            user:Model,
        },

        logging: true,

        seeds(server) {
            //@ts-ignore
            server.create("user", createUser("John Doe"))
            //@ts-ignore
            server.create("user", createUser("John Smith"))
            //@ts-ignore
            server.create("user", createUser("John Buck"))
        },

        routes() {
            this.namespace = "api"

            //@ts-ignore
            this.get("/users", (schema) => schema.users.all())
        },
    })
}