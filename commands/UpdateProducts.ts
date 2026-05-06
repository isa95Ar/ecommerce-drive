import { container } from 'tsyringe';
import ProductService from '../src/services/ProductService';
import CategoryService from '../src/services/CategoryService';
import GoogleSheetService from '../src/services/GoogleSheetService';
import { slugify } from '../helpers/slug';
import GoogleDriveFilesService from '../src/services/GoogleDriveFilesService';
import { productType } from '../src/global/types';
import config from '../constants/config';

function timestamp() {
	return new Date().toISOString();
}

function serializingProducts(products: Array<Array<string>>): Array<productType> {
	console.log(`[${timestamp()}] [serializingProducts] Serializing ${products.length - 1} product rows from sheet`);
	const serializeProducts = [];

	products.map((product, i) => {
		if (i !== 0) {
			serializeProducts.push({
				stock: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.STOCK_COLUMN] == '1',
				code: parseInt(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]),
				name: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.NAME_COLUMN],
				minimum: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.MINIUM_COLUMN],
				price: parseFloat(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.PRICE_COLUMN]),
				category: slugify(product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN]),
				categoryName: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CATEGORY_COLUMN],
				seller: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.SELLER_COLUMN],
				order: product[config.GOOGLE_SHEET_ROWS.PRODUCTS.SORT_COLUMN],
				picture: `/img/${product[config.GOOGLE_SHEET_ROWS.PRODUCTS.CODE_COLUMN]}.jpg`
			});
		}
	});

	const inStock = serializeProducts.filter(p => p.stock).length;
	console.log(`[${timestamp()}] [serializingProducts] Serialized ${serializeProducts.length} products (${inStock} in stock)`);
	return serializeProducts;
}

async function saveProductsOnMongo(products: Array<productType>): Promise<object> {
	console.log(`[${timestamp()}] [saveProductsOnMongo] Saving products to MongoDB...`);
	try {
		const productService = container.resolve(ProductService);

		console.log(`[${timestamp()}] [saveProductsOnMongo] Clearing existing products collection`);
		await productService.clearAll();

		const inStockProducts = products.filter(p => p.stock);
		console.log(`[${timestamp()}] [saveProductsOnMongo] Inserting ${inStockProducts.length} in-stock products`);

		await Promise.all(
			products.map(async product => {
				if (product.stock) {
					await productService.saveProduct(product);
				}
			})
		);

		console.log(`[${timestamp()}] [saveProductsOnMongo] Products saved successfully`);
		return { success: true };
	} catch (e) {
		console.error(`[${timestamp()}] [saveProductsOnMongo] Error saving products to MongoDB:`, e);
		return { error: e };
	}
}

async function saveCategories(products: Array<productType>): Promise<object> {
	console.log(`[${timestamp()}] [saveCategories] Extracting and saving categories...`);
	try {
		const categoryService = container.resolve(CategoryService);

		const categories = [];

		console.log(`[${timestamp()}] [saveCategories] Clearing existing categories collection`);
		await categoryService.clearAll();

		products.map(product => {
			if (!categories.includes(product.categoryName)) {
				categories.push(product.categoryName);
			}
		});

		console.log(`[${timestamp()}] [saveCategories] Found ${categories.length} unique categories: ${categories.join(', ')}`);

		Promise.all(
			categories.map(async category => {
				await categoryService.saveCategory(category);
			})
		);

		console.log(`[${timestamp()}] [saveCategories] Categories saved successfully`);
		return { success: true };
	} catch (e) {
		console.error(`[${timestamp()}] [saveCategories] Error saving categories to MongoDB:`, e);
		return { error: e };
	}
}

export async function updateProducts(): Promise<object> {
	console.log(`[${timestamp()}] [updateProducts] Starting full product update`);
	try {
		console.log(`[${timestamp()}] [updateProducts] Connecting to Google Sheets (module: products)...`);
		const googleSheetInstance = new GoogleSheetService('products');
		const products: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
		console.log(`[${timestamp()}] [updateProducts] Google Sheets data fetched — ${products.length} rows received`);

		const GDservice = new GoogleDriveFilesService();
		//const filesInfo = await GDservice.retrieveFilesFromPicturesFolder();

		const productsFormated: Array<productType> = serializingProducts(products);

		console.log(`[${timestamp()}] [updateProducts] Saving products to database...`);
		await saveProductsOnMongo(productsFormated);

		console.log(`[${timestamp()}] [updateProducts] Saving categories to database...`);
		await saveCategories(productsFormated);

		console.log(`[${timestamp()}] [updateProducts] Product update completed successfully`);
		return { success: true };
	} catch (e) {
		console.error(`[${timestamp()}] [updateProducts] Error during product update:`, e);
		return { error: e };
	}
}
