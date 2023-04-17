import { Badge, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Cart } from '../src/global/types';
import { CartIcon } from './svg/CartIcon';

type props = {
	cart: Cart;
};

const ButtonCart: FC<props> = ({ cart }) => {
	const router = useRouter();

	return (
		<div className="container-floating">
			<Button onClick={() => router.push('cart')} size={'xs'} className={'button-floating'}>
				<div className="button-content">
					<div className="cart-total">$ {cart.total}  No olvides confirmar tu compra entrando aquí!</div>
					<Badge
						color="warning"
						size={'sm'}
						content={cart.products.length}
						shape="circle"
						onClick={() => router.push('/cart')}
					>
						<CartIcon fill="white" size={24} width={24} height={24} onClick={() => router.push('/cart')} />
					</Badge>
				</div>
			</Button>
		</div>
	);
};

export default ButtonCart;
