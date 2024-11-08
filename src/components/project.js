import React from 'react';
import Music1 from '../images/Musicstorehome.png'
import Music2 from '../images/products.png'
import Music3 from '../images/latest.png'
import Arch1 from '../images/Arch.png'
import Arch2 from '../images/Arch2.png'
import Arch3 from '../images/Arch3.png'
import Wool1 from '../images/Wool.png'
import Wool2 from '../images/Wool2.png'
import Wool3 from '../images/Wool3.png'
import Lokflix1 from '../images/Lokflix.png'
import Lokflix2 from '../images/Lokflix2.png'
import Lokflix3 from '../images/Lokflix light.png'
import Pokedex1 from '../images/pokedex.png'
import Pokedex2 from '../images/pokedex_tablet.png'
import Pokedex3 from '../images/pokedex_mobile.png'
import Mymoviz1 from '../images/mymoviz.png'
import Mymoviz2 from '../images/mymoviztablet.png'
import Mymoviz3 from '../images/mymovizmobile.png'
import Mapquest1 from '../images/mapquestportfolio.png'
import Mapquest2 from '../images/mapquestportfolio2.png'
import Mapquest3 from '../images/mapquestportfolio3.png'
import Drugsync from '../videos/DrugsyncV2.mp4'
import Catalogo from '../videos/Catalogo.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    return (
        <div className='project_container'>
            <h2 className='project_title'>Mes projets</h2>
            <div className='project'>
                <img src={Lokflix1} alt='Lokflix' className='project_img_1'/>
                <img src={Lokflix2} alt='Lokflix' className='project_img_2'/>
                <img src={Lokflix3} alt='Lokflix' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_petit-aper%C3%A7u-de-mon-portfolio-avec-mon-tout-activity-7241883514428694528-9FCD?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name'>Lokflix</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>Lokflix est un site en frontend réalisé en HTML, CSS et Javascript je me suis inspiré de plusieurs sites de streaming vidéo comme Netflix, Disney+ et Amazon Prime.</p>
            </div>

            <div className='project'>
                <img src={Arch1} alt='arch' className='project_img_1'/>
                <img src={Arch2} alt='arch' className='project_img_2'/>
                <img src={Arch3} alt='arch' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_pour-mon-deuxi%C3%A8me-projet-de-mars-2023-jai-activity-7242218470996676608-tWnk?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name'>Arch</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>Arch est un site en HTML, CSS, Javascript. Cette maquette s'inspire des villes futuristes comme The Line en Arabie Saoudite.</p>
            </div>

            <div className='project'>
                <img src={Music1} alt='music store' className='project_img_1'/>
                <img src={Music2} alt='music store' className='project_img_2'/>
                <img src={Music3} alt='music store' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_deuxi%C3%A8me-projet-en-react-r%C3%A9alis%C3%A9-durant-ma-activity-7242936834756939776-158Y?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name'>Music Store</a>            
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>Music Store est un site en React. Cette maquette s'inspire de sites tels que Sonos, JBL ou Bose</p>
            </div>

            <div className='project'>
                <img src={Wool1} alt='wool' className='project_img_1'/>
                <img src={Wool2} alt='wool' className='project_img_2'/>
                <img src={Wool3} alt='wool' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_nouvelle-application-web-en-react-cette-activity-7248052771101229056-AL9M?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name'>Wool</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>Wool est un site en React. Ce site permet à un utilisateur de recycler ses vetements et de gagner des points qu'il peut échanger contre des cartes cadeaux.</p>
            </div>


            <div className='project'>
                <img src={Pokedex1} alt='Pokedex' className='project_img_desk'/>
                <img src={Pokedex2} alt='Pokedex' className='project_img_tablet'/>
                <img src={Pokedex3} alt='Pokedex' className='project_img_mobile'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_nouvelle-application-react-%C3%A9galement-r%C3%A9alis%C3%A9e-activity-7243307340408451072-AWjY?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name'>Pokedex</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>Pokedex est une application en React permettant de consulter les 151 premiers Pokémon, et tout cela totalement responsive.</p>
            </div>

            <div className='project'>
                <img src={Mymoviz1} alt='Mymoviz' className='project_img_desk'/>
                <img src={Mymoviz2} alt='Mymoviz' className='project_img_tablet'/>
                <img src={Mymoviz3} alt='Mymoviz' className='project_img_mobile'/>
            </div>
            <div className='project_info'>
                <p className='project_name'>My Moviz</p>
                <hr className='project_separator' />
                <p className='project_text'>My Moviz est une application en React faite durant ma formation. Cette application permet de noter des films, de consulter les notes et de les ajouter dans une liste.</p>
            </div>

            <div className='project'>
                <img src={Mapquest1} alt='MapQuest' className='project_img_desk'/>
                <img src={Mapquest2} alt='MapQuest' className='project_img_tablet'/>
                <img src={Mapquest3} alt='MapQuest' className='project_img_mobile'/>
            </div>
            <div className='project_info'>
                <a href='https://www.linkedin.com/feed/update/urn:li:ugcPost:7259241236224520193/' target="_blank" rel="noreferrer" className='project_name'>MapQuest</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                <hr className='project_separator' />
                <p className='project_text'>MapQuest est une application réalisée en React. Je me suis inspiré de jeux comme GeoGuessr et Bandle pour créer ce jeu qui consiste à identifier une ville grâce à sa carte satellite. Le jeu est jouable en anglais et en français et est totalement responsive. Vous pouvez le tester en cliquant <span onClick={() => window.open('https://map-quest-blue.vercel.app/', '_blank')} style={{ color: '#ffffff', textDecoration: 'underline', cursor: 'pointer' }}>ici</span>.</p>
            </div>

            <div className='project_video'>
            <div className='project_video_item'>
                <video className='project_video_mobile' controls>
                    <source src={Drugsync} type='video/mp4'/>
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                <div className='project_info_video'>
                    <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_ma-toute-premiere-application-mobile-faite-activity-7245074436377210880-6b0P?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name_video'>DrugSync</a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                    <hr className='project_separator_video' />
                    <p className='project_text_video'>DrugSync est une application en React Native que j'ai developpé avec trois autres personnes durant ma formation à La Capsule. Cette application permet aux médecins de vérifier les interactions entre les différents médicaments ou entre les médicaments et les pathologies du patient.</p>
                </div>
                </div>

                <div className='project_video_item'>
                    <video className='project_video_mobile' controls>
                        <source src={Catalogo} type='video/mp4' />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className='project_info_video'>
                        <a href='https://www.linkedin.com/posts/yannis-denant-boemont-341819253_deuxi%C3%A8me-application-en-react-native-que-activity-7246592959276531715-Gyyh?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noreferrer" className='project_name_video'>CataloGo</a>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" style={{color: "#ffffff", marginLeft:'10px'}} />
                        <hr className='project_separator_video' />
                        <p className='project_text_video'>CataloGo est une application en React Native que j'ai développée car je consomme beaucoup de produits culturels et je voulais un endroit pour noter les films, séries, jeux-vidéo, albums et livres que je consomme. De plus, je voulais créer une wishlist pour mieux organiser mes envies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;