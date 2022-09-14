import Layout from "./layout";
import LoginCard from "../components/cards/LoginCard";
import Header from "../components/navigation/Header";
import { Button, Container, Grid } from "@nextui-org/react";
import ProductCart from "../components/ProductCart";
import TotalCart from "../components/TotalCart";
import { useCart } from "../src/hooks/CartHook";
import { ProductCart as productType, UserLogged } from "../src/global/types";
import { getIronSession, IronSessionData } from "iron-session";
import { sessionOptions } from "../src/utils/withIronSession";

export default function Cart(props) {
  const cart = useCart();

  const sendOrder = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await fetch("/api/orders", {
          method: "POST",
          body: JSON.stringify({ products: cart.Cart.products }),
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
              
              <Grid direction="column" xs={12} sm={12} md={4} xl={8} lg={8}>
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

export async function getServerSideProps(context) {
  const ironSession: IronSessionData = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  const user: UserLogged = ironSession.user ?? { logged: false };

  return {
      props: {user}
    }
};
