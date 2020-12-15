export enum Loading {
  none,
  start,
  ok,
}

export type CurrencyType = {
  code: string;
  cource: number;
  price: number;
};

export type CurrencyPriceType = "USD" | "EUR";

export type PricesType = {
  USD: CurrencyType;
  EUR: CurrencyType;
};
export enum Session {
  withUser,
  noUser,
}

export type UserType = {
  id: number;
  name: string;
  email: string;
  password?: string;
};
