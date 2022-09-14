
import {
  Card,
  Grid,
  Text,
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
                src={item.picture}
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
                  <Button  onClick={() => addProduct(item, quantity)} className="button-text" css={{backgroundColor:"#F29400",color:"black"}} auto flat>
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
