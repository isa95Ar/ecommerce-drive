import { Grid, Container, Row, Pagination, Loading } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/cards/ProductCard';
import { getCategories, getProducts } from '../helpers/content';
import Header from '../components/navigation/Header';
import CategorySelector from '../components/CategorySelector';
import { useCart } from '../src/hooks/CartHook';
import { sessionOptions } from '../src/utils/withIronSession';
import { container } from 'tsyringe';
import ConfigService from '../src/services/ConfigService';
import { getIronSession, IronSessionData } from 'iron-session';
import { UserLogged } from '../src/global/types';
import OrderService from '../src/services/OrderService';

export default function Products(props) {

	const cart = useCart(props.cart);
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([{ key: '', name: 'Todos' }]);
	const [category, setCategory] = useState({ key: '', name: 'Todos' });
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const addProductToCart = (product, qty) => {
		cart.addProduct(product, qty);
	};

	useEffect(() => {
		getProducts().then(res => {
			setProducts(res.products);
			setTotalPages(res.totalPages);
			setLoading(false);
		});
		getCategories().then(res => {
			let categoriesParsed = [];
			res.map(category => categoriesParsed.push({ key: category.slug, name: category.name }));
			setCategories([{ key: '', name: 'Todos' }, ...categoriesParsed]);
		});
	}, []);

	const fetchData = (page, category) => {
		getProducts(page, category.key).then(res => {
			setCurrentPage(page);
			setTotalPages(res.totalPages);
			setProducts(res.products);
		});
	};

	useEffect(() => {
		setCurrentPage(1);
		fetchData(1, category);
	}, [category]);

	return (
		<>
			<Header title="Elegí el rubro y encontrá tus productos" user={props.user} cart={cart.Cart} />
			<Container css={{ backgroundColor: '#fff' }}>
				<Row css={{ backgroundColor: '#fff' }}>
					<CategorySelector categories={categories} setCategory={val => setCategory(val)} category={category} />
				</Row>
				{loading ? (
					<Loading css={{ margin: 'auto', width: '100%', paddingTop: '10vh' }} color="warning">
						Cargando...
					</Loading>
				) : (
					<>
						<Grid.Container gap={2} css={{ padding: 0, backgroundColor: '#fff' }}>
							{products.map(item => (
								<Grid xs={12} sm={12} md={6} lg={4} xl={4} key={item.code}>
									<ProductCard
										addProduct={(product, qty) => addProductToCart(product, qty)}
										item={item}
										key={item.code}
									/>
								</Grid>
							))}
						</Grid.Container>
						<Grid.Container gap={2} css={{ padding: 0 }}>
							<Grid justify="center" md={12} lg={12} xl={12} xs={12} sm={12}>
								<Pagination
									initialPage={1}
									total={totalPages}
									onChange={page => fetchData(page, category)}
									color="warning"
									page={currentPage}
								/>
							</Grid>
						</Grid.Container>
					</>
				)}
			</Container>
		</>
	);
}

export async function getServerSideProps(context) {
	const configService = container.resolve(ConfigService);
	const getIsOpen = await configService.getCartStatus();
	const ironSession: IronSessionData = await getIronSession(context.req, context.res, sessionOptions);
	if (getIsOpen.status !== 'open' || !ironSession.user) {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			},
			props: {}
		};
	}

	let cart:any = {};

	const user: UserLogged = ironSession.user ?? { logged: false };

	const orderService = container.resolve(OrderService);
	const ModelResponse = await orderService.getUserOrder(user.email);
	if (ModelResponse) {
		cart.products = ModelResponse.products.map(({ code, name, price, minimum, qty, total, picture }) => ({
			code,
			name,
			price,
			minimum,
			qty,
			total,
			picture
		}));
	}

	return { props: { cartStatus: getIsOpen, user,cart } };
}
