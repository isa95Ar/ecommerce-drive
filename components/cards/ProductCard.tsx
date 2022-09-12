import {
  Card,
  Grid,
  Text,
  Image,
  Row,
  Button,
  Popover,
  Avatar,
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
            <Grid sm={7} xs={7} lg={6} md={6} xl={6} justify="center">
              <Avatar
                css={{width:100,height:100}}
                className="product-image"
                src="https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1662940800&Signature=Z8l8tNl7-LjlkbXM79cDGZGhKjLUw49mS3yn~iuOANWb-CewZF6E0Eo3U3lqLtRsk2V4I5y74~pXTiw-P88HPP2cUf3BUCfm3LGUnk0TsZ9kQflS0BaP2lldIA174tZpUo82eHnIPZENYjeT7dcXj7siOGMAEYS26JVT7WbrHZZcmteXs01Fpy4xU-NYQjnxEIsUEd0BZftl-yiAZgjWNU8uJU71eIiJqc5HhsxBj0izH-AKkI5OIi7454TRm-CsOgB93WgACpWxCATgU2m0lR5G1qYkGJfr5kA97De-Wgm6khozCXc1BlfSbFIJxvgFsHGoCRVAwHzEMIMDrnf6IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
            </Grid>
            <Grid className="details-container" lg={6} md={6} xl={6}>
              <Text className="product-name">{item.name}</Text>
              <Text className="product-reference">{item.minimum}</Text>
              <Text className="product-supplier">
                <FontAwesomeIcon icon={faFaceLaughBeam} />
                {item.seller}
              </Text>
              <Text className="product-price">${item.price}</Text>
            </Grid>
          </Row>
          <Row>
            <Grid
              sm={7}
              xs={7}
              lg={6}
              md={6}
              xl={6}
              className="product-quantity"
              justify="center"
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
            <Grid sm={3} xs={3} lg={6} md={6} xl={6}>
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
