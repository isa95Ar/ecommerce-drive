export type ProductCart = {
  code: number,
  name: string,
  qty: number,
  total: number,
  price?:number
};

export type UserLogged = {
  id_google_sheet?: string;
  name?: string;
  email?: string;
  profile_picture?: string;
  logged?: boolean;
};

export type Cart = {
  products: Array<ProductCart>;
  total: number;
};


export type OrderType = Array<{email:string,product:string,cantidad:string,code:number}>