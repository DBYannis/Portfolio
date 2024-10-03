import React from 'react';
import HTML from '../images/file-type-html.svg';
import CSS from '../images/file-type-css.svg';
import JS from '../images/javascript-js.svg';
import ReactLogo from '../images/react.svg';
import ReactNative from '../images/sdk-react-native.svg';
import MongoDB from '../images/mongodb-original-wordmark.svg';
import Express from '../images/express-original.svg';
import Figma from '../images/figma.svg';
import Photoshop from '../images/adobe-photoshop.svg';
import Trello from '../images/trello.svg';
import ChromeDev from '../images/chrome-dev.svg';
import Terminal from '../images/terminal.svg';
import GitHub from '../images/github.svg';

const Tech = () => {
  return (
    <div className="tech">
      <h3 className="reveal">Mes compétences techniques</h3>
      <div className="tech_grid">
        <div className="dev reveal">
            <h4 className='tech_title'>Développement</h4>
            <div className="logo_container">
                <img src={HTML} alt="HTML Logo" className="logo" />
                <img src={CSS} alt="CSS Logo" className="logo" />
                <img src={JS} alt="JavaScript Logo" className="logo" />
                <img src={ReactLogo} alt="React Logo" className="logo" />
                <img src={ReactNative} alt="React Native Logo" className="logo" />
                <img src={MongoDB} alt="MongoDB Logo" className="logo" />
                <img src={Express} alt="Express Logo" className="logo" />
            
          </div>
        </div>
        <div className="design reveal">
            <h4 className='tech_title'>Design</h4>
            <div className="logo_container">
                <img src={Figma} alt="Figma Logo" className="logo" />
                <img src={Photoshop} alt="Photoshop Logo" className="logo" />
            </div>
        </div>
        <div className="tools reveal">
            <h4 className='tech_title'>Outils</h4>
            <div className="logo_container">
                <img src={Trello} alt="Trello Logo" className="logo" />
                <img src={ChromeDev} alt="Chrome Dev Logo" className="logo" />
                <img src={Terminal} alt="Terminal Logo" className="logo" />
                <img src={GitHub} alt="GitHub Logo" className="logo" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
