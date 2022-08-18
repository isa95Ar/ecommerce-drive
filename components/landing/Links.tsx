import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spacer, Link } from '@nextui-org/react';
import React from 'react';

export default function Links() {
    return (
        <>
        <Spacer y={3} />
        <FontAwesomeIcon icon={faArrowRight} color="white"/><Link block href='#' className="link-container" underline> Visitá Nuestra página</Link>
        <Spacer y={1} />
        <FontAwesomeIcon icon={faArrowRight} color="white"/><Link block href='#' className="link-container" underline> Unite a la comunidad</Link></>
    )
}