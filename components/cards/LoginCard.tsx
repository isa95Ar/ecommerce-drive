import { Card, Grid, Text, Input, Spacer, Container, Button } from "@nextui-org/react";
import bgImg from '../../public/img/BgImgLogin.jpg';
import loginLogo from '../../public/img/loginLogo.png';
export default function LoginCard() {
    const style = {
        backgroundImage: `url(${bgImg.src})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
    return (
      <div style={style}>
        <Container alignItems="center" css={{height:'100vh'}}>
            
            <Grid.Container justify="center">
                <Grid >
            <Card css={{ background: 'none' }}>
                <Card.Header css={{paddingTop:"15vh"}}>
                    <Card.Image
                    src={loginLogo.src}
                    objectFit="cover"
                    width="100%"
                    height={"auto"}
                    alt="AlMargen Logo"
                    />
                </Card.Header>
                <Spacer y={2}/>
                <Card.Footer>
                    <Button size='lg' css={{marginLeft:"auto", marginRight:"auto", background:'White', color:'Black',textAlign:"center"}}>G Ingresa con google</Button>
                </Card.Footer>
            </Card>
            </Grid>
            </Grid.Container>
        </Container>
    </div> 
    );
}
