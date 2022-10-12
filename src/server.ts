import { createServer, Model, Factory, Registry } from "miragejs";
import faker from "faker";
import UserI from "./types/User";
import Schema from "miragejs/orm/schema";
import { FactoryDefinition, ModelDefinition } from "miragejs/-types";

const UserModel: ModelDefinition<UserI> = Model.extend({});
const UserFactory: FactoryDefinition<UserI> = Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  dateOfBirth() {
    return faker.date.past(30);
  },
  isAdmin() {
    return faker.random.boolean();
  },
});

type AppRegistry = Registry<
  {
    user: typeof UserModel;
  },
  {
    user: typeof UserFactory;
  }
>;
type AppSchema = Schema<AppRegistry>;

export default function makeServer() {
  createServer({
    //logging: true,
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
      server.createList("user", 102);
    },

    routes() {
      this.namespace = "api";
      this.get("/users/:page/:limit", (schema: AppSchema, req) => {
        const { page, limit } = req.params;
        const start = Number(page) * Number(limit);
        const stop = Number(page) * Number(limit) + Number(limit);

        return {
          users: schema.all("user").slice(start, stop),
          totalEntries: schema.all("user").length,
        };
      });
      this.get("/user/:id", (schema: AppSchema, req) =>
        schema.where("user", { id: req.params.id })
      );
      this.post("/generate_user", (schema: AppSchema, req) =>
        schema.create("user")
      );
      this.delete("/user/:id", (schema: AppSchema, req) =>
        schema.where("user", { id: req.params.id }).destroy()
      );
    },
  });
}
