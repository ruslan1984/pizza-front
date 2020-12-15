
import { PricesType, Loading } from "@components/types";

export type BasketItemType = {
    id: number,
    name: string,
    img: string,
    price: number,
    currency: string,
    count:number,
    prices: PricesType,
}

export type OrderUserType = {
    name?:string,
    email?:string,
    address?:string
}

export type BasketSliceType = {
    list: Array<BasketItemType>|{};
    loading: Loading;
    totalPrice: number;
    deliveryPrice:number;
    totalDeliveryPrice:number;
    deliveryCurrentPrice: number;
    errors: Array<string>;
    orderUser:OrderUserType;
    canBay: boolean;
}
