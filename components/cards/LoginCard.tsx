import { Card, Grid, Text, Input, Spacer, Container, Button } from "@nextui-org/react";
import bgImg from '../../public/img/placeholder/placeholderImg.png'
export default function LoginCard() {
    const style = {
        backgroundImage: `url(${bgImg.src})`,
        backgroundPosition:"center"
    }
    return (
      <div style={style}>
        <Container alignItems="center" css={{height:'100vh'}}>
            
            <Grid.Container justify="center">
                <Grid >
            <Card css={{ background: 'none' }}>
                <Card.Header>
                    
                </Card.Header>
                <Spacer y={5}/>
                <Card.Body css={{minHeight:'20vh'}}>
                Aqui ira el logo
                </Card.Body>
                <Spacer y={2}/>
                <Card.Footer>
                    <Button size='lg' css={{background:'White', color:'Black',textAlign:"center"}}>Ingresa con google</Button>
                </Card.Footer>
            </Card>
            </Grid>
            </Grid.Container>
        </Container>
    </div> 
    );
}
