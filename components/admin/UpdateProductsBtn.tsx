import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Loading } from '@nextui-org/react';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { Fetch } from '../../src/hooks/fetchHook';

const UpdateProductsBtn: FC = () => {
	const [loading, setLoading] = useState(false);

	const updateProducts = () => {
		setLoading(true);
		Fetch({
			url: '/api/admin/update-products',
			onSuccess: response => {
				setLoading(false);
				toast.warn('Productos actualizados exitosamente', {
					icon: <FontAwesomeIcon icon={faCheckCircle} color="#EA903C" />
				});
			},
			onError: e => {
				setLoading(false);
				toast.error('Ocurrió un error actualizando los productos', {
					icon: <FontAwesomeIcon icon={faCheckCircle} color="#EA903C" />
				});
			}
		});
	};

	return (
		<Button className={loading ? 'button-total-disabled' : 'button-total'} onClick={updateProducts}>
			{loading ? <Loading /> : 'Actualizar productos'}
		</Button>
	);
};

export default UpdateProductsBtn;
