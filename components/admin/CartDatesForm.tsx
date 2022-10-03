import { Button, Container, Grid, Input, Loading, Text } from '@nextui-org/react';
import { FC, useState } from 'react';
import { datesFormType, errorsFormType, statusCart } from '../../src/global/types';
import { Fetch } from '../../src/hooks/fetchHook';
import { useFormValidation } from '../../src/hooks/formHook';
import { formatDate, getMinCloseDate } from '../../helpers/date';

type props = {
	setEditing(status: boolean): void;
	setCurrentStatus(status: statusCart): void;
	initialStatus: statusCart;
};

const initialFormFields: datesFormType = { openDate: '', closeDate: '' };
const initialFormErrors: errorsFormType = {};

const CartDatesForm: FC<props> = ({ setEditing, setCurrentStatus }) => {
	const form = useFormValidation<datesFormType>(initialFormFields);
	const [errors, setErrors] = useState(initialFormErrors);
	const [fetching, setFetching] = useState({ error: null, loading: false, done: false });

	const today = formatDate(new Date());
	console.log(formatDate(new Date()));
	const handleChangeField = (e, property: keyof datesFormType) => {
		const value = e.target.value;
		form.setValue(property, value);
	};

	const submitDates = () => {
		setFetching({ error: null, done: false, loading: true });
		Fetch<datesFormType>({
			url: '/api/admin/cart/dates',
			method: 'POST',
			data: form.fields,
			onSuccess: response => {
				setCurrentStatus(response);
				setFetching({ error: null, loading: false, done: true });
			},
			onError: e => setFetching({ error: 'Ocurrió un error enviando las fechas', loading: false, done: true })
		});
		setEditing(false);
	};

	const validate = () => {
		let localErrors: errorsFormType = form.validateFields({
			openDate: 'Debe ingresar una fecha de apertura',
			closeDate: 'Debe ingresar una fecha de cierre'
		});
		const validateIntervalDates = new Date(form.closeDate) <= new Date(form.openDate);

		if (localErrors || validateIntervalDates) {
			setErrors(localErrors ?? { openDate: 'La fecha de cierre debe ser mayor que la de apertura' });
		}

		return !localErrors;
	};

	return (
		<Container>
			<Grid.Container gap={3} justify="center">
				<Grid>
					<Input
						type="datetime-local"
						label="Fecha y hora de apertura"
						min={today}
						value={form.openDate}
						onChange={e => handleChangeField(e, 'openDate')}
					/>
					<Text color="error">{errors.openDate ?? ''}</Text>
				</Grid>
				<Grid>
					<Input
						type="datetime-local"
						label="Fecha y hora de cierre"
						disabled={form.openDate === ''}
						min={getMinCloseDate(form.openDate)}
						value={form.closeDate}
						onChange={e => handleChangeField(e, 'closeDate')}
					/>
					<Text color="error">{errors.closeDate ?? ''}</Text>
				</Grid>
			</Grid.Container>
			<Button
				onClick={() => setEditing(false)}
				className={fetching.loading ? 'button-total-disabled' : 'button-cancel'}
			>
				Cancelar
			</Button>
			<Button
				onClick={() => validate() && submitDates()}
				className={fetching.loading ? 'button-total-disabled' : 'button-total'}
			>
				Confirmar
			</Button>
			<Grid.Container gap={2} direction="column" justify="center">
				{fetching.loading && <Loading color="warning" />}
				{fetching.done && fetching.error && <Text>{fetching.error}</Text>}
			</Grid.Container>
		</Container>
	);
};

export default CartDatesForm;
