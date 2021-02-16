import { createServer, Model, Factory, RestSerializer } from "miragejs";
import faker from "faker";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { Transaction } from "types";
import { isEmpty } from "ramda";

dayjs.extend(isSameOrBefore);

function randomThumb() {
  const gender = ["women", "men"][faker.random.number() % 2];
  const num = faker.random.number(30);

  return `https://randomuser.me/api/portraits/thumb/${gender}/${num}.jpg`;
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
        date: () =>
          faker.date.between(
            dayjs().toDate(),
            dayjs().subtract(1, "y").toDate()
          ),
        description: () => faker.finance.transactionDescription(),
        amount: () => faker.finance.amount(),
        balance: () => faker.finance.amount(),
      }),
    },

    seeds(server) {
      server.createList(
        "transaction",
        faker.random.number({ min: 200, max: 500 })
      );
    },

    routes() {
      this.get("/transactions", function (this: any, schema, request) {
        // paginate
        if (!isEmpty(request.queryParams)) {
          const { transactions } = this.serialize(schema.all("transaction"));

          const number = Number(request.queryParams["page[number]"] || 0);
          const size = Number(request.queryParams["page[size]"] || 0);

          const minIndex = number;
          const maxIndex = number + size;

          const results = transactions
            .sort((a: any, b: any) => b.date - a.date)
            .slice(minIndex, maxIndex);

          const next =
            maxIndex <= transactions.length &&
            `/api/transactions?page[number]=${maxIndex}&page[size]=${size}`;

          return {
            data: formatDate(results),
            links: {
              next,
            },
          };
        }

        // default
        const { transactions } = this.serialize(schema.all("transaction"));
        return {
          data: formatDate(transactions),
        };
      });
    },
  });
}

function formatDate(transactions: Transaction[]) {
  return transactions.map((transaction) => ({
    ...transaction,
    date: dayjs(transaction.date).format("MM/DD"),
  }));
}
