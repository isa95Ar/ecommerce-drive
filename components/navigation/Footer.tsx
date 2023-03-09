import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Image, Text, Row, Link } from '@nextui-org/react';
import React, { FC } from 'react';

const Footer: FC = () => {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className="footer-container">
			<Grid.Container className={'footer-container'} gap={2}>
				
			</Grid.Container>
			<div className={'footer-last-container'}>
				<Text className={'footer-text-copy'}>© Copyright - {year} Mutual La Correntosa</Text>
			</div>
		</div>
	);
};

export default Footer;
