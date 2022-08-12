import "reflect-metadata";
import Product from "../src/schemas/Product";
import mongoConnection from "../src/utils/mongoConnection";
import GoogleSheetService from "../src/services/GoogleSheetService";

type productType = {
  stock: boolean;
  code: number;
  name: string;
  minium: string;
  price: number;
  category: string;
};


function serializingProducts(
  products: Array<Array<string>>
): Array<productType> {
  const serializeProducts = [];

  products.map((product, i) => {
    if (i !== 0) {
      serializeProducts.push({
        stock: product[0] == "1",
        code: parseInt(product[1]),
        name: product[2],
        minium: product[3],
        price: parseFloat(product[4]),
        category: product[5],
      });
    }
  });

  return serializeProducts;
}

async function saveProductsOnMongo(
  products: Array<productType>
): Promise<object> {
  try {
    await mongoConnection();

    // @ts-ignore
    products.map(async (product) => await Product.create(product));

    console.log("finish success!");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}

export async function updateProducts(): Promise<object> {
  try {
    const googleSheetInstance = new GoogleSheetService("products");
    const products: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();

    const productsFormated: Array<productType> = serializingProducts(products);

    await saveProductsOnMongo(productsFormated);

    return { success: true };
  } catch (e) {
    console.log(e, "??");
    return { error: e };
  }
}

