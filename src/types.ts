export interface Avatar {
  id: string;
  img: string;
  name: string;
}

export interface Transaction extends Avatar {
  id: string;
  name: string;
  img: string;
  date: string;
  description: string;
  amount: string;
  balance: string;
}
