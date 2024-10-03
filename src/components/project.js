import React from 'react';
import Music1 from '../images/Musicstorehome.png'
import Music2 from '../images/products.png'
import Music3 from '../images/latest.png'
import Arch1 from '../images/Arch.png'
import Arch2 from '../images/Arch2.png'
import Arch3 from '../images/Arch3.png'
import Lokflix1 from '../images/Lokflix.png'
import Lokflix2 from '../images/Lokflix2.png'
import Lokflix3 from '../images/Lokflix light.png'
import Pokedex1 from '../images/pokedex.png'
import Pokedex2 from '../images/pokedex_tablet.png'
import Pokedex3 from '../images/pokedex_mobile.png'
import Mymoviz1 from '../images/mymoviz.png'
import Mymoviz2 from '../images/mymoviztablet.png'
import Mymoviz3 from '../images/mymovizmobile.png'
import Drugsync from '../videos/DrugsyncV2.mp4'
import Catalogo from '../videos/Catalogo.mp4'

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
                <h1 className='project_name'>Lokflix</h1>
                <hr className='project_separator' />
                <p className='project_text'>Lokflix est un site en frontend réalisé en HTML, CSS et Javascript je me suis inspiré de plusieurs sites de streaming vidéo comme Netflix, Disney+ et Amazon Prime.</p>
            </div>

            <div className='project'>
                <img src={Arch1} alt='arch' className='project_img_1'/>
                <img src={Arch2} alt='arch' className='project_img_2'/>
                <img src={Arch3} alt='arch' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <h1 className='project_name'>Arch</h1>
                <hr className='project_separator' />
                <p className='project_text'>Arch est un site en HTML, CSS, Javascript. Cette maquette s'inspire des villes futuristes comme The Line en Arabie Saoudite.</p>
            </div>

            <div className='project'>
                <img src={Music1} alt='music store' className='project_img_1'/>
                <img src={Music2} alt='music store' className='project_img_2'/>
                <img src={Music3} alt='music store' className='project_img_3'/>
            </div>
            <div className='project_info'>
                <h1 className='project_name'>Music Store</h1>
                <hr className='project_separator' />
                <p className='project_text'>Music Store est un site en React. Cette maquette s'inspire de sites tels que Sonos, JBL ou Bose</p>
            </div>


            <div className='project'>
                <img src={Pokedex1} alt='Pokedex' className='project_img_1'/>
                <img src={Pokedex2} alt='Pokedex' className='project_img_tablet'/>
                <img src={Pokedex3} alt='Pokedex' className='project_img_mobile'/>
            </div>
            <div className='project_info'>
                <h1 className='project_name'>Pokedex</h1>
                <hr className='project_separator' />
                <p className='project_text'>Pokedex est une application en React permettant de consulter les 151 premiers Pokémon, et tout cela totalement responsive.</p>
            </div>

            <div className='project'>
                <img src={Mymoviz1} alt='Mymoviz' className='project_img_1'/>
                <img src={Mymoviz2} alt='Mymoviz' className='project_img_tablet'/>
                <img src={Mymoviz3} alt='Mymoviz' className='project_img_mobile'/>
            </div>
            <div className='project_info'>
                <h1 className='project_name'>My Moviz</h1>
                <hr className='project_separator' />
                <p className='project_text'>My Moviz est une application en React faite durant ma formation. Cette application permet de noter des films, de consulter les notes et de les ajouter dans une liste.</p>
            </div>

            <div className='project_video'>
            <div className='project_video_item'>
                <video className='project_video_mobile' controls>
                    <source src={Drugsync} type='video/mp4'/>
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                <div className='project_info_video'>
                    <h1 className='project_name_video'>DrugSync</h1>
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
                        <h1 className='project_name_video'>Catalogo</h1>
                        <hr className='project_separator_video' />
                        <p className='project_text_video'>Catalogo est une application en React Native que j'ai développée car je consomme beaucoup de produits culturels et je voulais un endroit pour noter les films, séries, jeux-vidéo, albums et livres que je consomme. De plus, je voulais créer une wishlist pour mieux organiser mes envies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;