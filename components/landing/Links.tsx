import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@nextui-org/react';
import React, { FC } from 'react';

const Links: FC = () => {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<FontAwesomeIcon icon={faArrowRight} color="white" style={{ alignSelf: 'center' }} />
				<Link block href="#" className="link-container" underline>
					{' '}
					Visitá Nuestra página
				</Link>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<FontAwesomeIcon icon={faArrowRight} color="white" style={{ alignSelf: 'center' }} />
				<Link block href="#" className="link-container" underline>
					{' '}
					Unite a la comunidad
				</Link>
			</div>
		</>
	);
};

export default Links;
