import React from "react";
import { Text, Button, Badge } from "@nextui-org/react";
import { Cart, UserLogged } from "../src/global/types";
import { useRouter } from "next/router";
import { CartIcon } from "../components/svg/CartIcon";

type HeaderProps = {
  title: string;
  user: UserLogged;
  cart?: Cart
};

const Header: React.FC<HeaderProps> = ({ title, user, cart }) => {
  const router = useRouter();

  return (
    <div className="header">
      {user.logged && (
        <div className="logout-button">
          <Button className="logout-button" onClick={() => router.push("/api/logout")}>
            Cerrar Session ({user.name})
          </Button>
          {cart && (
            <Badge
            css={{cursor: "pointer"}}
            color="warning"
            content={cart.products.length}
            shape="circle"
          >
            <CartIcon fill="white" size={30} width={24} height={24} onClick={() => router.push("/cart")} />
          </Badge>
          )}
        </div>
      )}
      <Text className="header-text">{title}</Text>
    </div>
  );
};

export default Header;
