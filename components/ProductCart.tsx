import React, { useState } from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCart = () => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-cart">
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1661731200&Signature=gbtFkb-fsQ6khkbyvNCPyiCbbCyHbWvaqGw8Iujfon7FKgL7sjivLHbAhISYSBteXFgpFkLUgCi8j~S2kq7i8ZCqOLWrwuPm0cLnOWTZqdL1kks-vCeLEr0x5lhXfExpBEUteeYiEqeRFg2zFL~rge0KQCbN0HxXmKEFdiqMncPa-jrrTk7RmtCm0T~svH81kDDrzp6H8RgS60FSavxnU9dbCC-JVDhq3dsnKjMplRwSLcyN5XZ4txJOAV8MuunIMRfwwced2fNtfhO3Zb4nB9KMItnL-w2f0aHCXQITbYTZQkmFKEdZiiYZt6EjrKOIuFRF6JPXX2C9EPywdasEhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          className="product-image"
        />
      </div>
      <div className="title-buttons">
        <div>
          <Text className="product-name">
            Almohaditas rellenas de frutilla o limón
          </Text>
          <small className="product-description">1 un = bolsa 500 gr</small>
        </div>
        <div className="product-buttons">
          <Text
            className="quantity-border"
            onClick={() => {
              if (quantity > 1) setQuantity((prev) => prev - 1);
            }}
          >
            -
          </Text>
          <Text className="quantity">{quantity}</Text>
          <Text
            className="quantity-border"
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </Text>
        </div>
      </div>
      <div className="button-price">
        <FontAwesomeIcon icon={faTrash} />
        <Text className="product-price">$234</Text>
      </div>
    </div>
  );
};

export default ProductCart;
