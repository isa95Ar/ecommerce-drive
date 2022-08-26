import React from "react";
import { Text } from "@nextui-org/react";

const TotalCart = () => {
  return (
    <div className="total-cart">
      <div className="total-items">
        <Text className="items-text">Subtotal</Text>
        <Text className="items-text">$3009</Text>
      </div>
      <div className="divider"></div>
      <div className="total-items">
        <Text className="total-text">Total</Text>
        <Text className="total-text">$3009</Text>
      </div>
    </div>
  );
};

export default TotalCart;
