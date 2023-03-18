export interface Id {
  id: number
}

export interface IProduct {
  name: string
  amount: string
}

export interface AllProducts {
  id: number
  name: string
  amount: string
  order_Id: number
}

export interface IUser {
  username: string
  vocation: string
  level: number
  password: string
}

export interface Payload {
  body:{
    username: string
    vocation: string
    level: number
    password: string
  }
}

export interface Order {
  id: number;
  userId: number;
  productsIds: Array<number>;
}