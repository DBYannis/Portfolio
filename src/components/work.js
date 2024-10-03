import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileScreen, faPenRuler, faLightbulb } from '@fortawesome/free-solid-svg-icons';
function Work() {
  return (
    <div id="work">
      <div className="skill_container">
        <h3 className="skill reveal">Mes Compétences</h3>
        <div className="square_container">
          <div className="code_container reveal">
            <FontAwesomeIcon icon={faCode} size="2x" style={{ color: '#ffffff' }} />
            <p className="skill_text reveal">
              J’utilise HTML, CSS, JavaScript ainsi que React-Redux pour le front-End. Node, Express et MongoDB sont des outils que j’utilise pour le back-end.
            </p>
          </div>
          <div className="code_container reveal">
            <FontAwesomeIcon icon={faMobileScreen} size="2x" style={{ color: '#ffffff' }} />
            <p className="skill_text reveal">
              Je suis capable de créer des applications mobiles grâce à React Native et Expo ce qui me permet de développer des applications performantes et agréables à utiliser.
            </p>
          </div>
          <div className="code_container reveal">
            <FontAwesomeIcon icon={faPenRuler} size="2x" style={{ color: '#ffffff' }} />
            <p className="skill_text reveal">
              Ce que je préfère dans le développement web est le front-end car j’aime créer et designer des applications claires et ergonomiques autant dans l’UI que l’UX.
            </p>
          </div>
          <div className="code_container reveal">
            <FontAwesomeIcon icon={faLightbulb} size="2x" style={{ color: '#ffffff' }} />
            <p className="skill_text reveal">
              Durant ma formation j’ai dû gérer une équipe de trois autres personnes afin de délivrer une application mobile. Je suis donc capable de travailler en équipe et de surmonter les difficultés avec mes collègues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
