import React from 'react';
import { Text, Button, Badge } from '@nextui-org/react';
import { Cart, UserLogged } from '../../src/global/types';
import { useRouter } from 'next/router';
import { CartIcon } from '../svg/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
	title: string;
	user: UserLogged;
	cart?: Cart;
};

const Header: React.FC<HeaderProps> = ({ title, user, cart }) => {
	const router = useRouter();

	return (
		<div className="header">
			{user.logged && (
				<div className="buttons-container">
					<div>
						<FontAwesomeIcon onClick={() => router.push('/')}  size={'lg'} icon={faHomeAlt} style={{ color: 'white' }} />
					</div>
					<div className="sessions-buttons">
						<Button className="logout-button" onClick={() => router.push('/api/logout')}>
							Cerrar Session ({user.name})
						</Button>
						{cart && (
							<Badge css={{ cursor: 'pointer' }} color="warning" content={cart.products.length} shape="circle">
								<CartIcon fill="white" size={30} width={24} height={24} onClick={() => router.push('/cart')} />
							</Badge>
						)}
					</div>
				</div>
			)}
			<Text className="header-text">{title}</Text>
		</div>
	);
};

export default Header;
