export type ProductCart = {
	code: number;
	name: string;
	qty: number;
	total: number;
	price?: number;
	minimum: string;
	picture?: string;
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

export type GoogleSheetDataType = Array<Array<string>>;

export type OrderType = Array<{ email: string; product: string; cantidad: string; code: number }>;

export type FileInfoType = Array<{ webViewLink: string; code: number }>;

export type ProductModel = {
	stock: boolean;
	code: number;
	name: string;
	minimum: string;
	price: number;
	category: string;
	seller: string;
	google_sheet_id?: string;
	picture?: string;
};

export type statusCart = {
	status: string;
	openDate: string;
	closeDate: string;
};

export type datesFormType = {
	openDate: string;
	closeDate: string;
};

export type errorsFormType = {
	openDate?: string;
	closeDate?: string;
};
