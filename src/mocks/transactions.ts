import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { Transaction } from "types";

import Avatar_06 from "assets/avatar/06.png";

const transactions: Transaction[] = [
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
    description: "12月的伙食費",
    amount: -1200,
    balance: 123456789,
  },
];

export default transactions;