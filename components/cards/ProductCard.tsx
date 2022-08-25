import { Card, Grid, Text, Image, Row, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ProductCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  return (
        <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card css={{margin:0}}>
            <Card.Body className="product-container">
              <Row className="text-container">
                <Grid sm={8} xs={8} lg={5} md={5} xl={5}>
                  <Image
                    className="product-image"
                    width={120}
                    height={120}
                    src="https://s3-alpha-sig.figma.com/img/1a50/6114/accaeeb408d6dfb78fad323b25d00302?Expires=1661731200&Signature=gbtFkb-fsQ6khkbyvNCPyiCbbCyHbWvaqGw8Iujfon7FKgL7sjivLHbAhISYSBteXFgpFkLUgCi8j~S2kq7i8ZCqOLWrwuPm0cLnOWTZqdL1kks-vCeLEr0x5lhXfExpBEUteeYiEqeRFg2zFL~rge0KQCbN0HxXmKEFdiqMncPa-jrrTk7RmtCm0T~svH81kDDrzp6H8RgS60FSavxnU9dbCC-JVDhq3dsnKjMplRwSLcyN5XZ4txJOAV8MuunIMRfwwced2fNtfhO3Zb4nB9KMItnL-w2f0aHCXQITbYTZQkmFKEdZiiYZt6EjrKOIuFRF6JPXX2C9EPywdasEhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  ></Image>
                </Grid>
                <Grid className="details-container" lg={7} md={7} xl={7}>
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
                  <Button color="warning" auto>
                    <span className="button-text">Agregar</span>
                  </Button>
                </Grid>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
  );
}
