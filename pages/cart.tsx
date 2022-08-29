import Layout from "./layout";
import LoginCard from "../components/cards/LoginCard";
import Header from "../components/Header";
import { Button, Container } from "@nextui-org/react";
import ProductCart from "../components/ProductCart";
import TotalCart from "../components/TotalCart";
import { useCart } from "../src/hooks/CartHook";
import { ProductCart as productType } from "../src/global/types";

export default function Cart(props) {
  const cart = useCart();

  return (
    <Layout {...props}>
      {props.user.logged && (
        <>
          <Header user={props.user} title={"Tu carrito"} cart={cart.Cart} />
          <Container>
            {cart.Cart.products.map((product: productType) => (
              <ProductCart
                key={product.code}
                deleteProduct={(product:productType) => cart.removeProduct(product)}
                addProduct={(product:productType,qty) => cart.addProduct(product,qty)}
                product={product}
              />
            ))}
            <TotalCart total={cart.Cart.total} />
            <Button className="button-total">Realizar pedido</Button>
          </Container>
        </>
      )}
    </Layout>
  );
}
