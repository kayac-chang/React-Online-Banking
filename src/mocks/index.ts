import { createServer, Model, Factory, RestSerializer } from "miragejs";
import faker from "faker";
import dayjs from "dayjs";
import { Transaction } from "types";

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
        faker.random.number({ min: 100, max: 200 })
      );
    },

    routes() {
      this.get("/transactions", function (this: any, schema, request) {
        function condition() {
          if (request.queryParams.month) {
            return schema.where("transaction", (transaction) => {
              const month = dayjs()
                .subtract(1, "y")
                .month(Number(request.queryParams.month || 12) - 1);

              return dayjs(transaction.date).isSame(month, "month");
            });
          }

          return schema.all("transaction");
        }

        const { transactions } = this.serialize(condition());
        return {
          transactions: formatDate(transactions),
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
