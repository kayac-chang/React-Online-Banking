export interface Avator {
  id: string;
  img: string;
  name: string;
}

export interface Transaction extends Avator {
  id: string;
  name: string;
  img: string;
  date: string;
  description: string;
  amount: number;
  balance: number;
}
