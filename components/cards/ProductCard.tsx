import {
  Card,
  Grid,
  Text,
  Image,
  Row,
  Button,
  Popover,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProductCard({ item, addProduct }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
      <Card css={{ margin: 0 }}>
        <Card.Body className="product-container">
          <Row className="text-container">
            <Grid sm={8} xs={8} lg={6} md={6} xl={6}>
              <Image
                className="product-image"
                width={120}
                height={120}
                src="https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1662940800&Signature=Z8l8tNl7-LjlkbXM79cDGZGhKjLUw49mS3yn~iuOANWb-CewZF6E0Eo3U3lqLtRsk2V4I5y74~pXTiw-P88HPP2cUf3BUCfm3LGUnk0TsZ9kQflS0BaP2lldIA174tZpUo82eHnIPZENYjeT7dcXj7siOGMAEYS26JVT7WbrHZZcmteXs01Fpy4xU-NYQjnxEIsUEd0BZftl-yiAZgjWNU8uJU71eIiJqc5HhsxBj0izH-AKkI5OIi7454TRm-CsOgB93WgACpWxCATgU2m0lR5G1qYkGJfr5kA97De-Wgm6khozCXc1BlfSbFIJxvgFsHGoCRVAwHzEMIMDrnf6IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              ></Image>
            </Grid>
            <Grid className="details-container" lg={6} md={6} xl={6}>
              <Text className="product-name">{item.name}</Text>
              <Text className="product-reference">{item.minium}</Text>
              <Text className="product-supplier">
                <FontAwesomeIcon icon={faFaceLaughBeam} />
                {item.seller}
              </Text>
              <Text className="product-price">${item.price}</Text>
            </Grid>
          </Row>
          <Row>
            <Grid
              sm={8}
              xs={8}
              lg={8}
              md={8}
              xl={8}
              className="product-quantity"
            >
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
            </Grid>
            <Grid sm={4} xs={4} lg={4} md={4} xl={4}>
              <Popover>
                <Popover.Trigger>
                  <Button  onClick={() => addProduct(item, quantity)} className="button-text" color={"warning"} auto flat>
                    Agregar
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text css={{ p: "$10" }}>
                    Agregado exitosamente!
                  </Text>
                </Popover.Content>
              </Popover>
            </Grid>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  );
}
