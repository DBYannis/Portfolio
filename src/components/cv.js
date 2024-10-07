import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import cv from '../Cv Denant-Boemont Yannis.pdf'

const Cv = () => {
  return (
    <div className="cv">
      <a href={cv} download className='cv_text'>
        Télécharger le CV
      </a>
      <FontAwesomeIcon icon={faFileArrowDown} size="2xl" className='icon_cv' />
    </div>
  );
};

export default Cv;
