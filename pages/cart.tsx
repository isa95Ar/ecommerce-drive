import Layout from "./layout";
import LoginCard from "../components/cards/LoginCard";
import Header from "../components/Header";
import { Button, Container, Grid } from "@nextui-org/react";
import ProductCart from "../components/ProductCart";
import TotalCart from "../components/TotalCart";
import { useCart } from "../src/hooks/CartHook";
import { ProductCart as productType } from "../src/global/types";

export default function Cart(props) {
  const cart = useCart();

  const sendOrder = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await fetch("/api/orders", {
          method: "POST",
          body: JSON.stringify({ products: cart.Cart.products,email:'isaarg2312@gmail.com' }),
        });
        cart.removeCart();
        resolve(true);
      } catch (e) {
        
        reject(e);
      }
    });
  };

  return (
    <Layout {...props}>
      {props.user.logged && (
        <>
          <Header user={props.user} title={"Tu carrito"} cart={cart.Cart} />
          <Container>
            <Grid.Container justify="center" gap={2}>
              <Grid direction="column" md={8} lg={8} xl={8}>
                {cart.Cart.products.map((product: productType) => (
                  <ProductCart
                    key={product.code}
                    deleteProduct={(product: productType) =>
                      cart.removeProduct(product)
                    }
                    addProduct={(product: productType, qty) =>
                      cart.addProduct(product, qty)
                    }
                    product={product}
                  />
                ))}
                <TotalCart total={cart.Cart.total} />
                <Button
                  disabled={cart.Cart.products.length < 0}
                  className={`${
                    cart.Cart.products.length > 0
                      ? "button-total"
                      : "button-total-disabled"
                  }`}
                  onClick={sendOrder}
                >
                  Realizar pedido
                </Button>
              </Grid>
            </Grid.Container>
          </Container>
        </>
      )}
    </Layout>
  );
}
