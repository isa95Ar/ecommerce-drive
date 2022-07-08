import { Card, Grid, Text } from "@nextui-org/react";

export default function CardExample() {
  return (
    <Grid.Container gap={2}>
      <Grid xs={4}>
        <Card>
          <Card.Body>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos quisquam deserunt repudiandae, distinctio reiciendis ipsam dolore tempora placeat, velit libero at. Nobis, provident. Soluta aliquid accusantium error ipsum dolores?</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="flat">
          <Card.Body>
            <Text>Flat card.</Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Text>Bordered card.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
