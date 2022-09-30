import { Grid, Button, Image, Text, Loading } from '@nextui-org/react';
import { FC, useState } from 'react';
import { GoogleIcon } from '../svg/GoogleIcon';

const LoginCard: FC = () => {
	const [loading, setLoading] = useState(false);
	return (
		<Grid className="login">
			<Grid.Container justify="center" alignContent="center">
				<Grid xs={12} xl={12} css={{ zIndex: 9000 }}>
					<Image src="/img/logoCoop.png" alt="Default Image" />
				</Grid>
				<Grid xs={12} xl={3} sm={6} md={3} lg={3} justify="center">
					<Button className="google-button" onClick={() => {
							setLoading(true);
							location.href = '/api/login'
						}}>
						{loading ? (
							<Loading color="warning" size="sm"/>
						) : (
							<div className="button-container">
							<GoogleIcon width={30} height={30} />
							<Text style={{ marginLeft: 5 }}>Ingresá con Google</Text>
						</div>
						)}	
						
					</Button>
				</Grid>
			</Grid.Container>
		</Grid>
	);
};

export default LoginCard;
