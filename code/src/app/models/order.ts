import {IItemQuantuty} from "./item_quantity";

export interface IOrder{
  id: number
  date: string
  address: string
  deliverDate: string
  price: string
  orderNumber: string
  items: IItemQuantuty[] //массива id:количество товаров в заказе

}
