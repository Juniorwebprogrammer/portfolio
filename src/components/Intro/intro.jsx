import css from './assets/css.png';
import html from './assets/html.png';
import js from './assets/JS.png';
import react from './assets/react.png';
import node from './assets/node.png';
import scss from './assets/scss.png';
import electron from './assets/electron.png';
import python from './assets/python.png';
import back from './assets/back.png';
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
                        <img src={html} alt='html' onClick={()=> window.open("https://es.wikipedia.org/wiki/HTML")}/>
                        <img src={css} alt='css' onClick={()=> window.open("https://es.wikipedia.org/wiki/CSS")}/>
                        <img src={js} alt='js' onClick={()=> window.open("https://es.wikipedia.org/wiki/JavaScript")}/>
                    </div>
                </div>
                <div className='imageContainer_2'>
                    <div className='img_2'>
                        <img src={react} alt='react' onClick={()=> window.open("https://reactjs.org/")}/>
                        <img src={scss} alt='scss' onClick={()=> window.open("https://sass-lang.com/")}/>
                        <img src={electron} alt='electron' onClick={()=> window.open("https://www.electronjs.org/")}/>
                    </div>
                </div>
                <div className='imageContainer_3'>
                    <div className='img_3'>
                        <img src={node} alt='node' onClick={()=> window.open("https://nodejs.org/es/")}/>
                        <img src={python} alt='python' onClick={()=> window.open("https://www.python.org/")}/>
                    </div>
                    <div className='imageback'>
                        <img src={back} alt='back' onClick={()=> window.open("https://www.djangoproject.com/")}/>
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