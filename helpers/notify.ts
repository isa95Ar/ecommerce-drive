import { toast } from 'react-toastify';

export const infoMessages = () => {
	const action = location.href.split('#');
	switch (action[1]) {
		case 'logout':
			toast.info('Se ha deslogeado');
			break;
		case 'logged':
			toast.success('Inicio de sesion exitoso!');
			break;
		case 'unauthorized':
			toast.error('No se encuentra autorizado');
			break;
		default:
			break;
	}
};
