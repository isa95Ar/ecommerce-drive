import { Button, Container, Grid, Input, Loading, Text } from '@nextui-org/react';
import { FC, useEffect, useState } from 'react';
import { datesFormType, errorsFormType, statusCart } from '../../src/global/types';
import { useFormValidation } from '../../src/hooks/formHook';
import { formatDate, getMinCloseDate } from '../../src/utils/helpers';

type props = {
	setEditing(status: boolean): void;
	setCurrentStatus(status: statusCart): void;
};

const CartDatesForm: FC<props> = ({ setEditing, setCurrentStatus }) => {
	const initialFormFields:datesFormType = {openDate:'',closeDate:''};
	const initialFormErrors:errorsFormType = {};

	const form = useFormValidation<datesFormType>(initialFormFields);
	const [errors,setErrors] = useState(initialFormErrors);
	const [fetching, setFetching] = useState({ error: null, loading: false, done: false });

	const today = formatDate(new Date());

	const handleChangeField = (e,property:keyof datesFormType) => {
		const value = e.target.value;
	
		form.setValue(property,value);
	}

	const submitDates = async () => {
		try {
			setFetching({ error: null, done: false, loading: true });

			const response = await fetch('/api/admin/cart/dates', {
				method: 'POST',
				body: JSON.stringify({ openDate:form.openDate, closeDate:form.closeDate })
			});
			const newStatus = await response.json();

			setCurrentStatus(newStatus);

			setFetching({ error: null, loading: false, done: true });
			setEditing(false);
		} catch (e) {
			setFetching({
				error: 'Ocurrió un error enviando las fechas',
				loading: false,
				done: true
			});
			console.log(e);
		}
	};

	const validate = () => {
		let localErrors:errorsFormType = form.validateFields({openDate:'Debe ingresar una fecha de apertura',closeDate:'Debe ingresar una fecha de cierre'});
		const validateIntervalDates = new Date(form.closeDate) <= new Date(form.openDate);
		
		if(localErrors || validateIntervalDates){
			setErrors(localErrors ?? {openDate : 'La fecha de cierre debe ser mayor que la de apertura'});
		}
		
		return !localErrors;
	};

	const handleSubmit = () => {
		const isValid = validate();
		if (!isValid) {
			return;
		}
		submitDates();
	};

	return (
		<Container>
			<Grid.Container gap={3} justify="center">
				<Grid>
					<Input
						type="date"
						label="Nueva fecha de apertura"
						min={today}
						value={form.openDate}
						onChange={(e) => handleChangeField(e,'openDate')}
					/>
					<Text color="error">{errors.openDate ?? ''}</Text>
				</Grid>
				<Grid>
					<Input
						type="date"
						label="Nueva fecha de cierre"
						disabled={form.openDate === ''}
						min={getMinCloseDate(form.openDate)}
						value={form.closeDate}
						onChange={(e) => handleChangeField(e,'closeDate')}

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
			<Button onClick={handleSubmit} className={fetching.loading ? 'button-total-disabled' : 'button-total'}>
				Confirmar
			</Button>
			<Grid.Container gap={2} direction="column" justify="center">
				{fetching.loading && <Loading color="warning"></Loading>}
				{fetching.done && fetching.error && <Text>{fetching.error}</Text>}
			</Grid.Container>
		</Container>
	);
};

export default CartDatesForm;
