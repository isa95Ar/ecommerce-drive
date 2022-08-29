import React, { FC } from "react";
import { Text } from "@nextui-org/react";

type totalCartProps = {
  total:number
}


const TotalCart:FC<totalCartProps> = ({total}) => {
  return (
    <div className="total-cart">
      <div className="total-items">
        <Text className="items-text">Subtotal</Text>
        <Text className="items-text">${total.toFixed(2)}</Text>
      </div>
      <div className="divider"></div>
      <div className="total-items">
        <Text className="total-text">Total</Text>
        <Text className="total-text">${total.toFixed(2)}</Text>
      </div>
    </div>
  );
};

export default TotalCart;
