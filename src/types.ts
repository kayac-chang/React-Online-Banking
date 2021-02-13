export interface Avatar {
  id: string;
  img: string;
  name: string;
}

export interface Error {}

export interface Transaction extends Avatar {
  date: string;
  description: string;
  amount: string;
  balance: string;
}
