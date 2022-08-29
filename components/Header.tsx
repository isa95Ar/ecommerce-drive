import React from "react";
import { Text, Button, Badge } from "@nextui-org/react";
import { Cart, UserLogged } from "../src/global/types";
import { useRouter } from "next/router";
import { CartIcon } from "../components/svg/CartIcon";
import {useCart} from "../src/hooks/CartHook";

type HeaderProps = {
  title: string;
  user: UserLogged;
  cart: Cart
};

const Header: React.FC<HeaderProps> = ({ title, user,cart }) => {
  const router = useRouter();

  const closeSession = async () => {
    ;
  };

  return (
    <div className="header">
      {user.logged && (
        <div className="logout-button">
          <Button className="logout-button" onClick={() => router.push("/api/logout")}>
            Cerrar Session ({user.name})
          </Button>
          <Badge
            color="warning"
            content={cart.products.length}
            shape="circle"
          >
            <CartIcon fill="white" size={30} onClick={() => router.push("/cart")} />
          </Badge>
        </div>
      )}
      <Text className="header-text">{title}</Text>
    </div>
  );
};

export default Header;
