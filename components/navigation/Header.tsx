import React from 'react';
import { Text, Button, Badge, Image } from '@nextui-org/react';
import { Cart, UserLogged } from '../../src/global/types';
import { useRouter } from 'next/router';
import { CartIcon } from '../svg/CartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
					<div style={{ cursor: 'pointer' }}>
						<Image
							width={100}
							onClick={() => router.push('/')}
							src="/../../img/almargen-header.png"
							objectFit="contain"
						/>
					</div>
					<div className="sessions-buttons">
						<Button className="logout-button" onClick={() => router.push('/api/logout')}>
							Salir
							<FontAwesomeIcon className="logout-icon" icon={faArrowRightFromBracket}></FontAwesomeIcon>
						</Button>
						{cart && (
							<Badge
								css={{ cursor: 'pointer' }}
								color="warning"
								content={cart.products.length}
								shape="circle"
								onClick={() => router.push('/cart')}
							>
								<CartIcon fill="white" size={30} width={24} height={24} onClick={() => router.push('/cart')} />
							</Badge>
						)}
					</div>
				</div>
			)}
			<Text className="header-text" css={{ fontWeight: '700' }}>
				{title}
			</Text>
		</div>
	);
};

export default Header;
