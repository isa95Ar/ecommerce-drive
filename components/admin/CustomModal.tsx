import React, { FC } from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
type props = {
	visible: boolean;
	close: () => void;
	onConfirm: () => void;
};

const CustomModal: FC<props> = ({ visible, close, onConfirm }) => {
	console.log(visible);
	return (
		<Modal closeButton aria-labelledby="modal-title" open={visible} onClose={close}>
			<Modal.Header>
				<Text id="modal-title" size={18}>
					¿Desea enviar todos los pedidos al Excel?
				</Text>
			</Modal.Header>
			<Row css={{ padding: 10 }}>
				<Text size={16}>Los pedidos enviados ya no serán accesibles para los usuarios.</Text>
			</Row>
			<Modal.Footer>
				<Button auto flat color="error" onClick={close}>
					Cancelar
				</Button>
				<Button
					auto
					onClick={() => {
						close();
						onConfirm();
					}}
				>
					Enviar Pedidos
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CustomModal;
