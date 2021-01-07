import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { TransferHistory } from "types";

import Avatar_06 from "assets/avatar/06.png";
import Avatar_07 from "assets/avatar/07.png";
import Avatar_08 from "assets/avatar/08.png";
import Avatar_09 from "assets/avatar/09.png";
import Avatar_10 from "assets/avatar/10.png";
import Avatar_11 from "assets/avatar/11.png";

const history: TransferHistory[] = [
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_06,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_07,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_08,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_10,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_11,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
  {
    id: uuid(),
    name: "Robert Fox",
    img: Avatar_09,
    date: dayjs().format("YYYY/MM/DD"),
  },
];

export default history;
