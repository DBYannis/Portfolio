import React from 'react';
import Lokflix1 from '../images/Lokflix.png'
import Lokflix2 from '../images/Lokflix2.png'
import Lokflix3 from '../images/Lokflix light.png'
import Pokedex1 from '../images/pokedex.png'
import Pokedex2 from '../images/pokedex_tablet.png'
import Pokedex3 from '../images/pokedex_mobile.png'

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
                    <img src={Pokedex1} alt='Pokedex' className='project_img_1'/>
                    <img src={Pokedex2} alt='Pokedex' className='project_img_tablet'/>
                    <img src={Pokedex3} alt='Pokedex' className='project_img_mobile'/>
                </div>
            
            <div className='project_info'>
                <h1 className='project_name'>Pokedex</h1>
                <hr className='project_separator' />
                <p className='project_text'>Pokedex est une application en React permetant de consulter les 151 premiers Pokémon, et tout cela totalement responsive.</p>
            </div>
        </div>
    );
};

export default Project;