import { Card, Grid, Text, Input, Spacer, Container, Button } from "@nextui-org/react";
export default function LoginCard() {
    return (
        <Grid.Container justify="center">
            <Grid xs={6}>
                <Card variant="flat">
                    <Card.Header>
                        <Text h1
                            css={{
                                textAlign: "center",
                                width: '100%',
                            }}
                        > Accede con tu cuenta de Google
                        </Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        <Container>
                        <Spacer y={1} />
                        <Text>
                            <Input
                                size="xl"
                                clearable
                                underlined
                                labelPlaceholder="Acceder"
                                initialValue="Ejemplo@gmail.com"
                            />
                        </Text>
                        <Spacer y={1.2} />
                        <Text>
                            <Input.Password
                                size="xl"
                                underlined
                                labelPlaceholder="Contraseña"
                            />
                        </Text>
                        <Spacer y={0.5} />
                        <Grid.Container justify="flex-end">
                        <Grid xs={3}>
                        <Button size="lg" color="primary" bordered ghost>
                            Acceder
                        </Button>
                        </Grid>
                        </Grid.Container>                    
                        <Spacer y={1.2} />
                        <Card.Divider />
                        <Text>
                             **-----------Developer options-----------**
                        </Text>
                        <Spacer y={0.5} />
                        <Button size="lg" color="success" bordered ghost>
                            Force Success
                        </Button>
                        <Spacer y={0.5} />
                        <Button size="lg" color="error" bordered ghost>
                            Force Error
                        </Button>
                        </Container>
                    </Card.Body>

                </Card>
            </Grid>
        </Grid.Container>
    );
}
