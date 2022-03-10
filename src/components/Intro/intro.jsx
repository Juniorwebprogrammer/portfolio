import css from './assets/css.png';
import html from './assets/html.png';
import js from './assets/JS.png';
import react from './assets/react.png';
import node from './assets/node.png';
import ('./intro.scss');


export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='titleContainer'>
                    <h2> I have worked with the following technologies </h2>
                </div>
                <div className='imageContainer'>
                    <div className='img'>
                        <img src={html} alt='html'/>
                        <img src={css} alt='css'/>
                        <img src={js} alt='js'/>
                    </div>
                </div>
                <div className='imageContainer_2'>
                    <div className='img_2'>
                        <img src={react} alt='react'/>
                    </div>
                </div>
                <div className='imageContainer_3'>
                    <div className='img_3'>
                        <img src={node} alt='node'/>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Hi there I'm</h2>
                    <h1>Junior García</h1>
                    <h3>Full stack Developer<span></span></h3>
                </div>
            </div>
        </div>
    )
}