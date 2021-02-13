import { createServer, Model, Factory, RestSerializer } from "miragejs";
import faker from "faker";
import dayjs from "dayjs";

function randomThumb() {
  const gender = ["women", "men"][faker.random.number() % 2];
  const num = faker.random.number(30);

  return `https://randomuser.me/api/portraits/thumb/${gender}/${num}.jpg`;
}

function randomDate() {
  return dayjs(faker.date.past()).format("MM/DD");
}

export function initMockServer() {
  return createServer({
    namespace: "/api",

    models: {
      transaction: Model,
    },

    serializers: {
      transaction: RestSerializer,
    },

    factories: {
      transaction: Factory.extend({
        id: () => faker.random.uuid(),
        name: () => faker.name.findName(),
        img: () => randomThumb(),
        date: () => randomDate(),
        description: () => faker.finance.transactionDescription(),
        amount: () => faker.finance.amount(),
        balance: () => faker.finance.amount(),
      }),
    },

    seeds(server) {
      server.createList("transaction", faker.random.number(100));
    },

    routes() {
      this.get("/transactions");
    },
  });
}
