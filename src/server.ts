import { createServer, Model, Factory, Registry } from "miragejs"
import faker from "faker"
import UserI from "./types/User"
import Schema from 'miragejs/orm/schema'
import { FactoryDefinition, ModelDefinition } from 'miragejs/-types'

const UserModel: ModelDefinition<UserI> = Model.extend({});
const UserFactory: FactoryDefinition<UserI> = Factory.extend({
  name() {
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
    user: typeof UserModel;
  },
  {
    user: typeof UserFactory
  }
>;
type AppSchema = Schema<AppRegistry>;


export default function makeServer() {
  createServer({
    logging: true,
    // When we work on certain model (eg. user here) we can provide it's properties via <UserModel>
    models: {
      user: UserModel
    },
    // When we .create() new user we use <UserFactory> factory
    factories: {
      user: UserFactory
    },
    // Initial start of the server will generate some data for us with seed method
    seeds(server) {
      server.createList("user", 20)
    },

    routes() {
      this.namespace = "api"

      // TODO: expand this request to give us a chance to filter out users 1-10 etc.
      // https://miragejs.com/docs/main-concepts/route-handlers/#dynamic-paths-and-query-params
      this.get("/users", (schema:AppSchema) => schema.all("user"))
      // Those are good to go
      this.get("/user/:id", (schema:AppSchema, req) => schema.where("user", {id:req.params.id}))
      this.post("/generate_user", (schema:AppSchema, req)=> schema.create("user"))
      this.delete("/user/:id", (schema:AppSchema, req)=> schema.where("user", {id:req.params.id}).destroy())
    },
  })
}