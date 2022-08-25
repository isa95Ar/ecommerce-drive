import { Card, Grid, Text, Input, Spacer, Container, Button,Image } from "@nextui-org/react";


export default function LoginCard() {


    return (
      <Grid  className="login" >
          <Grid.Container  justify="center" alignContent="center">
                <Grid xs={12} xl={12}>
                    <Image 
                         src="/img/logoCoop.png"
                         alt="Default Image"
                    />
                </Grid>
                <Grid xs={12} xl={3} sm={6} md={3} lg={3}>
                    <Button  className="google-button" onClick={() => location.href = '/api/login'}>  Ingresá con Google</Button>
                </Grid>
          </Grid.Container>
    </Grid> 
    );
}
