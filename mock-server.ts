import { createServer, Model } from "miragejs"

export default function makeServer() {
  createServer({
    models: {
      ...
    },

    logging: true,

    seeds(server) {
      users: ...
    },

    routes() {
      this.namespace = "/mock"

      //@ts-ignore
      this.get("/users", (schema) => schema.users.all())
    },
  })
}
