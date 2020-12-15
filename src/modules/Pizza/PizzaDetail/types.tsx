import { Loading, CurrencyPriceType } from "@components/types";
export type PizzaDetailType = {
    id: number;
    name: string;
    img: string;
    price: string;
    descripton: string;
    currency: string;
}

export type PizzaDetailSliceType = {
    data: PizzaDetailType|{};
    loading: Loading;
    currency: CurrencyPriceType;
}
