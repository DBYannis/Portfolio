import React, { useEffect } from 'react';
import profileImage from '../images/Photo profil.jpg';

function Prensentation() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div id="pres">
      <h3 className="pres_title reveal">Qui-suis-je ?</h3>
      <img
        src={profileImage}
        alt="profil"
        className="photo reveal"
      />
      <p className="pres_text1 reveal">
        Je code depuis Juin 2021 grâce à CodeCademy où j’ai effectué la carrière Front-End. J’ai ensuite suivi un bootcamp à La Capsule afin de décrocher mon diplôme de développeur Full-Stack.
      </p>
      <p className="pres_text2 reveal">
        J’ai toujours été curieux de comprendre comment fonctionnaient les différentes technologies, c’est pourquoi le développement web m’a beaucoup plu. Je me suis d’abord tourné vers le front-end car j’aime le côté artistique et créatif qui permet de donner vie à des projets. Cependant le back-end m’a permis de mieux comprendre comment fonctionnait ce que j’avais appris en front-end.<br /><br />
        Quand je ne code pas, je développe mes autres passions telles que le cinéma, les jeux vidéos et jeux de société, la musique et l’automobile.
      </p>
    </div>
  );
}

export default Prensentation;
