export type ProductCart = {
  code: number;
  name: string;
  qty: number;
  total: number;
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
