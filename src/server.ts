import { createServer, Model, Factory, Registry } from "miragejs"
import faker from "faker"
import UserI from "./types/User"
import Schema from "miragejs/orm/schema"
import { FactoryDefinition, ModelDefinition } from "miragejs/-types"

const UserModel: ModelDefinition<UserI> = Model.extend({})
const UserFactory: FactoryDefinition<UserI> = Factory.extend({
  firstName() {
    return faker.name.firstName()
  },
  lastName() {
    return faker.name.lastName()
  },
  dateOfBirth() {
    return faker.date.past(30)
  },
  isAdmin() {
    return faker.random.boolean()
  },
})

type AppRegistry = Registry<
  {
    user: typeof UserModel
  },
  {
    user: typeof UserFactory
  }
>
type AppSchema = Schema<AppRegistry>

export default function makeServer() {
  createServer({
    logging: true,
    // When we work on certain model (eg. user here) we can provide it's properties via <UserModel>
    models: {
      user: UserModel,
    },
    // When we .create() new user we use <UserFactory> factory
    factories: {
      user: UserFactory,
    },
    // Initial start of the server will generate some data for us with seed method
    seeds(server) {
      server.createList("user", 100)
    },

    routes() {
      this.namespace = "api"
      this.get("/users/:page/:limit", (schema: AppSchema, req) => {
        // TODO: expand this request to give us a chance to filter out users 1-10 etc.
        // https://miragejs.com/docs/main-concepts/route-handlers/#dynamic-paths-and-query-params
        const { page, limit } = req.params
        // gdzie limit 5,10,25
        // page : w zaleznosci od tego ile jest rekordów / limit

        return schema
          .all("user")
          .slice(
            Number(page) * Number(limit),
            Number(page) * Number(limit) + Number(limit)
          )
        // wszyscy uzytkownicy z zakresu strony 20-30
        // fetch("/api/users/2/10")
      })
      // Those are good to go
      this.get("/user/:id", (schema: AppSchema, req) =>
        schema.where("user", { id: req.params.id })
      )
      this.post("/generate_user", (schema: AppSchema, req) =>
        schema.create("user")
      )
      this.delete("/user/:id", (schema: AppSchema, req) =>
        schema.where("user", { id: req.params.id }).destroy()
      )
    },
  })
}
